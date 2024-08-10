const express = require('express');
const { SignUpValidation, LoginInValidation } = require('../Middlewares/AuthValidation');
const {signup,login} = require('../Controllers/AuthController');
const router = express.Router();  // Changed from route.Router() to express.Router()

router.post('/login',LoginInValidation,login);
router.post('/signup', SignUpValidation, signup);

module.exports = router;
