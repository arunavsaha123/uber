const mongoose = require('mongoose');

const captainSchema = new mongoose.Schema({
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
        lowercase:true,
        match:[/^\w+$/,'please enter a valid email address']
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:[6,'password should be at least 6 characters long']
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        colour:{
            type:String,
            required:true,
            minlength:[3,'colour must be atleast 3 characters long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate must be 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'capacity should be at least 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','auto','motorcycle']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
});