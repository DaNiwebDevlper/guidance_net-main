import clientDasbboard from '../Controllers/ClientController.js';
import { authenticateUser, isClient } from '../Middlewares/Authorization.js';
import express from 'express';

const router = express.Router();  // Correct usage in ES6

router.get('/dashboard', authenticateUser, isClient, clientDasbboard);

export { router };