import { providerDasbboard } from '../Controllers/ServiceProvider.js';
import { authenticateUser, isServiceProvider } from '../Middlewares/Authorization.js';
import express from 'express';

const router = express.Router();  // Correct usage in ES6

router.get('/sp_dashboard', authenticateUser, providerDasbboard);

export { router };