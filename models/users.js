const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
        },

        email: {
            type: String,
        },

        phone_number: {
            type: Number,
        },

        country_Code: {
            type: String,
        },

        country: {
            type: String,
        },

        password: {
            type: String,
        },
      
        gender: {
            type: Number,
            enum: {
                male: 0,
                female: 1,
            },
        }, //,1-male,2-female,

      
        location: {
            type: String,
          },
        //   geometry: {
        //     type: {
        //       type: String,
        //       enum: ['Point'], // Specify the type as 'Point'
        //     //   required: true,
        //     },
        //     coordinates: {
        //       type: [Number],
        //     //   required: true,
        //     },
        //   },
        images: {
            type: String,

        },
        loginTime: {
            type: Number,
            default: 0,
        },
        deviceToken:{
            type:String
        },
       
        device_type: {
            type: Number,
            enum: [0, 1],
        }, //0-android,1-ios

        social_type: {
            type: Number,
            enum: [1, 2, 3],
        }, //1 google//2 facebook//3 apple

        social_id: {
            type: String,
        },

        otp: {
            type: Number,
        },
        otpVerified: {
            type: Number,
            enum: [0, 1],
            default: 0,
        },  //0-notVerified , 1- verfied

        role: {
            type: Number,
            enum: [0, 1, 2] //0=admin,1=student,2=teacher
        },



        device_token: {
            type: String,
        },

        isNotification: {
            type: Number,
            enum: [0, 1],
            default: 0,
        }, //0-off, 1-on
     
    },

    {
        timestamps: true,
    }
);
const users = mongoose.model('users', userSchema);
module.exports = users;
// export default new mongoose.models("users", users);
// module.exports = new mongoose.model("users", users);