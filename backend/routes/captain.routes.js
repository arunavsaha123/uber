const express = require('express');
const router = express.Router();
const {body} =require("express-validator")
const captainController = require('../controllers/captain.controller')

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name should be 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate must be atleast 3 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn('car','motorcycle','auto').withMessage('invalid vehicle type'),
],
    captainController.registerCaptain
)


module.exports = router;