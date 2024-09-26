const db = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const helper = require('../helper/helper');
const twilio = require('twilio');
const mailgun = require('mailgun-js');
var jwt = require('jsonwebtoken');
var secretCryptoKey = 'secretkey';
// Initialize Twilio (you will need to set your account SID and auth token in environment variables)
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
module.exports ={

  signup: async (req, res) => {
    try {
        const required = {
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            phone_number: req.body.phone_number // Collect phone number for OTP
        };

        const nonRequired = {
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            deviceToken: req.body.deviceToken,
            deviceType: req.body.deviceType,
            images: req.files && req.files.images,
        };

        // Validate required and non-required fields
        const requestData = await helper.vaildObject(required, nonRequired, res);
        if (!requestData) {
            return; // Early return if validation fails
        }

        // Check if password and confirmPassword match
        if (requestData.password !== requestData.confirmPassword) {
            return helper.error(res, 'Password and Confirm Password do not match');
        }

        // Image upload logic (if images are provided)
        let uploadImages = [];
        if (req.files && req.files.images) {
            const images = req.files.images;
            const imageArray = Array.isArray(images) ? images : [images];

            for (const image of imageArray) {
                const uploadedImage = await helper.fileUpload(image, 'images');
                uploadImages.push(uploadedImage);
            }
        }

        // Check if the email already exists in the database
        const findEmail = await db.findOne({ email: requestData.email });
        if (findEmail) {
            return helper.error(res, 'This email already exists');
        }

        // Hash the password for security
        const hash = bcrypt.hashSync(requestData.password, saltRounds);

        // Create the user document in the database
        const createUser = await db.create({
            fullName: requestData.fullName,
            email: requestData.email,
            userLocation: {
                type: "Point",
                coordinates: [requestData.longitude, requestData.latitude], // Ensure correct order
            },
            deviceToken: requestData.deviceToken,
            deviceType: requestData.deviceType,
            images: uploadImages,
            role: 1,
            password: hash
        });

        // Fetch the newly created user's information
        let userInfo = await db.findOne({ _id: createUser._id });
        await db.updateOne(
            { _id: userInfo._id },
            { $set: { deviceToken: requestData.deviceToken } }
        );

        // Generate a JWT token for the user
        let token = jwt.sign(
            { data: { _id: userInfo._id, email: userInfo.email } },
            secretCryptoKey,
            { expiresIn: '365d' }
        );
        userInfo.token = token;

        // Generate OTP and expiration time
        const otp = Math.floor(1000 + Math.random() * 9000);
        const otpExpiration = new Date(Date.now() + 5 * 60000); // 5 minutes from now

        // Update the user's record with the generated OTP
        const updateResult = await db.findOneAndUpdate(
            { email: requestData.email }, // Use requestData.email
            { $set: { otp: otp, otpExpiration: otpExpiration } },
            { new: true }
        );

        if (!updateResult) {
            return helper.error(res, "Failed to update OTP");
        }

        // Send OTP via email using Mailgun
        const mg = mailgun({
            apiKey: process.env.MAILGUN_API_KEY, // Use environment variables for security
            domain: "linkemon.com"
        });

        const messageText = `Your OTP is ${otp}`;

        await mg.messages().send({
            from: "",
            to: requestData.email, // Send OTP to email
            subject: "Your OTP",
            text: messageText,
        });

        // Send OTP via SMS using Twilio
        const accountSid = process.env.TWILIO_ACCOUNT_SID; // Twilio Account SID
        const authToken = process.env.TWILIO_AUTH_TOKEN; // Twilio Auth Token
        const client = require('twilio')(accountSid, authToken);

        await client.messages.create({
            body: `Your OTP is ${otp}`,
            to: requestData.phone_number,  // Send OTP to user's phone number
            from: process.env.TWILIO_PHONE_NUMBER // Your Twilio phone number
        });

        // Return success response with user info
        return helper.success(res, 'User created successfully, OTP sent via email and SMS', userInfo);
    } catch (error) {
        console.error(error); // Log the error for debugging
        return helper.error(res, error.message || 'An error occurred');
    }
},


    

login: async (req, res) => {
  try {
      const required = {
          email: req.body.email,
          password: req.body.password
      };

      const nonRequired = {
          deviceToken: req.body.deviceToken,
          deviceType: req.body.deviceType,
          phone_number: req.body.phone_number // Add phone number as a non-required field
      };

      const getdata = await helper.vaildObject(required, nonRequired, res);
      if (!getdata) {
          return; // Missing required properties
      }

      const find_email = await db.findOne({ email: getdata.email });
      if (!find_email) {
          return helper.error(res, 'User not found');
      }

      const checkPassword = await bcrypt.compare(getdata.password, find_email.password);
      if (!checkPassword) {
          return helper.error(res, 'Incorrect email or password');
      }

      await db.updateOne(
          { _id: find_email._id },
          { $set: { deviceToken: getdata.deviceToken, deviceType: getdata.deviceType } },
          { new: true }
      );

      const token = jwt.sign(
          { data: { _id: find_email._id, email: find_email.email } },
          secretCryptoKey,
          { expiresIn: "365d" }
      );
      find_email.token = token;

      // Generate OTP and set expiration
      const otp = Math.floor(1000 + Math.random() * 9000);
      const otpExpiration = new Date(Date.now() + 5 * 60000);

      const updateResult = await db.findOneAndUpdate(
          { email: getdata.email },
          { $set: { otp: otp, otpExpiration: otpExpiration } },
          { new: true }
      );

      if (!updateResult) {
       
          return helper.error(res, "Failed to update OTP");
      }

      // Send OTP via Mailgun (Email)
      const mg = mailgun({
          apiKey: process.env.MAILGUN_API_KEY, // Use environment variable
          domain: ""
      });

      const messageText = `Your OTP is ${otp}`;
      await mg.messages().send({
          from: "",
          to: getdata.email,
          subject: "Your OTP",
          text: messageText,
      });

      // Send OTP via Twilio (SMS)
      if (getdata.phone_number) { // Check if phone number is provided
          await client.messages.create({
              body: `Your OTP is ${otp}`, // OTP message text
              from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
              to: getdata.phone_number // The phone number to send the OTP to
          });
      }

      return helper.success(res, 'Login Successfully. OTP sent to your email and phone number', find_email);

  } catch (error) {
      return helper.error(res, error.message);
  }
},

    
  verify_otp: async (req, res) => {
    try {
      const required = {
        otp: req.body.otp,
        email: req.body.email,
      };

      const nonRequired = {};

      const getdata = await helper.vaildObject(required, nonRequired, res);

      if (!getdata) {
        return
      }

      let user;

      // Check if the OTP verification is for an email or phone number
      if (getdata.email) {
        user = await db.findOne({
          email: getdata.email,
          otp: getdata.otp,
        });
      } else {
        return helper.error(res, "Invalid input. Please provide an email");
      }

      if (!user) {
        return helper.error(res, "Invalid OTP or Email");
      }

      const updatedUser = await db.findOneAndUpdate(
        {
          email: getdata.email,
          otp: getdata.otp,
        },
        {
          $set: {
            otp_verified: true,
          },
        },
        { new: true } // Return the updated document
      );

      // Create a new object without the "images" field
      const userWithoutImages = {
        ...updatedUser.toObject(),
      };
      delete userWithoutImages.images;

      return helper.success(res, "OTP matched and user verified", userWithoutImages);
    } catch (error) {
      helper.error(res, error);
    }
  },

  resetPassword: async (req, res) => {
    try {
      const required = {
        email: req.body.email,
        otp: req.body.otp,
        newPassword: req.body.newPassword,
        confirmPassword: req.body.confirmPassword,
      };

      const nonRequired = {};

      const getdata = await helper.vaildObject(required, nonRequired, res);

      if (!getdata) {
        return
      }

      // Check if the provided OTP is valid
      const user = await db.findOne({
        email: getdata.email,
        otp: getdata.otp,
      });

      if (!user) {
        return helper.error(res, "Invalid OTP or Email");
      }

      // Check if newPassword is the same as the currentPassword
      if (getdata.newPassword === user.password) {
        return helper.error(res, 'NewPassword cannot be the same as the CurrentPassword');
      }

      // Update the user's password using bcrypt for hashing
      const saltRounds = 10; // Adjust the number of salt rounds as needed
      const hash = bcrypt.hashSync(getdata.newPassword, saltRounds);

      // Clear OTP and set password to null after successful password reset
      const updatedUser = await db.findOneAndUpdate(
        { _id: user._id },
        { $set: { password: hash, otp: null } },
        { new: true } // Return the updated document
      ).select('-images'); // Exclude the 'images' field from the response

      return helper.success(res, "Password reset successfully", updatedUser);
    } catch (error) {
      return helper.error(res, error.message);
    }
  },

  resend_otp: async (req, res) => {
    try {
      const required = {
        email: req.body.email,

      };
      const nonRequired = {};

      const getdata = await helper.vaildObject(required, nonRequired, res);


      if (!getdata) {
        return
      }

      const userExist = await db.findOne({ email: getdata.email });
      if (userExist === null) {
        return helper.error(res, "Email Not Exist");
      }



      // var otp = Math.floor(Math.random() * 1000000 + 1);

      const user = await db.findByIdAndUpdate(
        {
          _id: userExist._id, // Fix: Use the correct variable for user ID
        },
        { otp: 1234 }
      );



      var latestUserObj = await db.findById({ _id: result._id });
      latestUserObj.save();

      // let transport;
      // let messageText;

      // Send OTP either through email or phone based on the input
      // if (getdata.email) {
      //   // Send OTP through email
      //   transport = nodemailer.createTransport({
      //     host: "smtp.mailtrap.io",
      //     port: 2525,
      //     auth: {
      //       user: "f912cd891b1d06",
      //       pass: "50c4d05785c1d2",
      //     },
      //   });

      //   messageText = `Forget Password Link: Your OTP is ${otp}`;
      // }

      return helper.success(
        res,
        "Successfully created user and otp sent successfully",
        latestUserObj
      );

    } catch (err) {
      return helper.error(res, err.message);
    }
  },
    
    

}