const { adminDasbboard, createAdmin } = require('../Controllers/AdminController');
const { authenticateUser, isAdmin } = require('../Middlewares/Authorization');

const router = require('express').Router();

router.get('/dashboard', authenticateUser, isAdmin , adminDasbboard);
router.post('/create-admin-user', authenticateUser, isAdmin , createAdmin);

module.exports = router;