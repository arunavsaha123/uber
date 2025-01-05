const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name should be 3 characters long']
        },
        lastname:{
            type:String,
            minlength:[3,'last name should be 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    password:{
        type:String,
        required:true,
    },
    socketId:{
        type:String,
    }
});