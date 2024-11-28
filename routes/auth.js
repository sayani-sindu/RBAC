const express = require('express');
const {registerUser, loginUser} = require('../controllers/authControllers');
const { validateUser, validateRequest } = require('../utils/validation');

const router = express.router();

router.post('/register', validateUser, validateRequest, registerUser);

router.post('/login', loginUser);

module.exports = router;