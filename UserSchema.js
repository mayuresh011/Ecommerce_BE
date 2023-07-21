const mongoose= require('mongoose')
const userSchema = mongoose.Schema({
    _id:false,
    userId:{
        type:String,
        required:true
    },
    firstName :{
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
       unique : true,
    },
    password : {
        type : String,
        required : true,
        unique : true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phoneNo:{
        type : String,
        required : true,
        validate : function(value) {
            return /^[0-9]{10}$/.test(value);
        },
        unique : true,
        message : 'Invalid phone number format'
    },
    isActive :{
        type: Boolean,
        default : true
    }
},
{ timestamps: true });
module.exports = mongoose.model("User",userSchema);