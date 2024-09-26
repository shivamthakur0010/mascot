const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./connectDB.js');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/Users');

dotenv.config();


///  test 
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  },
});




// Rest of your server setup and logic...

app.use(cors());
connectDB();
app.use(fileUpload());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
