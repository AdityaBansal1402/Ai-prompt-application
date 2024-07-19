const mongoose = require ('mongoose');

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    pic:{
        type: String,
        default:""
    }
},{timestamps:true})
const User=mongoose.model('user',userschema,'users');
module.exports=User;