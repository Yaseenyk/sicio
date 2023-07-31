const mongoose = require('mongoose');


const signupSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});


const user = mongoose.model('user',signupSchema);


module.exports = user;

