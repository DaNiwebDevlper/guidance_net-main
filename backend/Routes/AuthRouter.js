import { signup, login, refreshToken, userProfile } from '../Controllers/AuthController.js';
import { authenticateUser } from '../Middlewares/Authorization.js';
import { signupValidation, loginValidation } from '../Middlewares/AuthValidation.js';
import express from 'express';

const router = express.Router();  // Correct usage in ES6

router.post('/login', loginValidation, login);
router.post('/signup', signup);
router.get('/refresh-token', refreshToken);
router.get('/user-profile', authenticateUser, userProfile);

export { router };