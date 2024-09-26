var jwt = require('jsonwebtoken');
var secretCryptoKey = 'secretkey';
const db = require('../models/users')
module.exports= {
    vaildObject: async function (required, non_required, res) {
        let msg ='';
        let empty = [];
        let table_name = (required.hasOwnProperty('table_name')) ? required.table_name : 'users';
        
        for (let key in required) {
            if (required.hasOwnProperty(key)) {
                if (required[key] == undefined || required[key] == '') {
                    empty.push(key)
    ;
                }
            }
        }
    
        if (empty.length != 0) {
            msg = empty.toString();
            if (empty.length > 1) {
                msg += " fields are required"
            } else {
                msg += " field is required"
            }
            res.status(400).json({
                'success': false,
                'msg': msg,
                'code': 400,
                 'body': {}
            });
            return;
        } else {
            if (required.hasOwnProperty('security_key')) {
                if (required.security_key != "") {
                    msg = "Invalid security key";
                    res.status(403).json({
                        'success': false,
                        'msg': msg,
                        'code': 403,
                        'body': []
                    });
                    res.end();
                    return false;
                }
            }
            if (required.hasOwnProperty('password')) {
                
            }
            const marge_object = Object.assign(required, non_required);
            delete marge_object.checkexit;
    
            for(let data in marge_object){
                if(marge_object[data]==undefined){
                    delete marge_object[data];
                }else{
                    if(typeof marge_object[data]=='string'){
                        marge_object[data]=marge_object[data].trim();
                    } 
                }
            }
    
            return marge_object;
        }
    },
    
    
    unixTimestamp: function () {
        var time = Date.now();
        var n = time / 1000;
        return (time = Math.floor(n));
      },


      authenticateJWT: async (req, res, next) => {
        const authHeader = req.headers.authorization;
    
        if (authHeader) {
          const token = authHeader.split(" ")[1];
    
          jwt.verify(token, secretCryptoKey, async (err, payload) => {
            // console.log("🚀 ~ file: nextHelpers.js:41 ~ jwt.verify ~ payload:", payload)
            if (err) {
              return res.sendStatus(403);
            }
    
            const existingUser = await db.findOne({
              
                _id: payload.data._id,
                loginTime: payload.data.loginTime,
              
            });
           
    
            if (existingUser) {
              req.user = existingUser;
    
              next();
            } else {
              res.sendStatus(403);
            }
          });
    
        } else {
          res.sendStatus(403);
        }
      },
    
    
     verifyUser: async (req, res, next) => {
        const authHeader = req.headers.authorization;
       
        if (authHeader) {
          const token = authHeader.split(" ")[1];
    
          jwt.verify(token, secretCryptoKey, async (err, payload) => {
            if (err) {
              return res.sendStatus(403);
            }
           
            const existingUser = await db.findOne({
              // where: {
              
                _id: payload.data._id,
                loginTime: payload.data.loginTime,
              // },
            });
           
    
            // const existingUser = await users.findOne({
            //   where: {
            //     id: payload.id,
            //     login_time: payload.login_time,
            //   },
            // });
            if (existingUser) {
              req.user = existingUser;
              next();
            } else {
              res.sendStatus(401);
            }
          });
        } else {
          res.sendStatus(401);
        }
      },
      

      fileUpload(file, folder = "users") {
        console.log(file, "===================================##@@");
    
        let file_name_string = file.name;
        var file_name_array = file_name_string.split(".");
    
        var file_ext = file_name_array[1];
    
        var letters = "ABCDE1234567890FGHJK1234567890MNPQRSTUXY";
        var result = "";
        while (result.length < 28) {
          var rand_int = Math.floor(Math.random() * 19 + 1);
          var rand_chr = letters[rand_int];
          if (result.substr(-1, 1) != rand_chr) result += rand_chr;
        }
        
        var resultExt = `${result}.${file_ext}`;
        file.mv(`public/${folder}/${result}.${file_ext}`, function (err) {
          if (err) {
            throw err;
          }
        });
        console.log(resultExt, "===========result");
        return resultExt;
      },
}