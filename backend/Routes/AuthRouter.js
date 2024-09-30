const { signup, login, refreshToken, userProfile } = require('../Controllers/AuthController');
const {authenticateUser} = require('../Middlewares/Authorization')
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.get('/refresh-token', refreshToken);
router.get('/user-profile', authenticateUser , userProfile);

module.exports = router;