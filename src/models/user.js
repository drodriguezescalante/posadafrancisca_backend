const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    },
    user_level:{
        type:String,
        required:true
    },
    turno:{
        type:String,
        required:true
    },
    user_status:{
        type:Boolean,
        required:true
    }
})
module.exports = mongoose.model('User',userSchema)