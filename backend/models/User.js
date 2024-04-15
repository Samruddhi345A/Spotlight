const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
name:{
    type:String,
    required:true
},
birthdate:{
    type:Date,
    required:true
},
gender:{
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
    required:true, 
},
role:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now  
    
},
profileImage:{
    type:String
}

});
const User = mongoose.model('user', UserSchema)
User.createIndexes();
module.exports = User;
