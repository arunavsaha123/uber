const express = require('express');
const Router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller')

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('first name should be 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
userController.registerUser
)

module.exports = Router;