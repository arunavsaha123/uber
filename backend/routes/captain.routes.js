const express = require('express');
const router = express.Router();
const {body} =require("express-validator")

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name should be 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body(vehicle.colour).isLength({min: 3}).withMessage('colour must be atleast 3 characters long'),
    body(vehicle.plate).isLength({min: 3}).withMessage('plate must be atleast 3 characters long'),
    body(vehicle.capacity).isInt({min: 1}).withMessage('capacity must be atleast 1'),
    body(vehicle.vehicleType).isIn('car','motorcycle','auto').withMessage('invalid vehicle type'),
],
    userController.registerUser
)


module.exports = router;