import { adminDasbboard, createAdmin } from '../Controllers/AdminController.js';
import { authenticateUser, isAdmin } from '../Middlewares/Authorization.js';
import express from 'express';

const router = express.Router();  // Correct usage in ES6
router.get('/dashboard', authenticateUser, isAdmin, adminDasbboard);
router.post('/create-admin-user', authenticateUser, isAdmin, createAdmin);

export { router };