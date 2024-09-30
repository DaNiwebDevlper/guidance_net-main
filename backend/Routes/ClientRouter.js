const { clientDasbboard } = require('../Controllers/ClientController');
const { authenticateUser, isClient } = require('../Middlewares/Authorization');

const router = require('express').Router();

router.get('/dashboard', authenticateUser, isClient , clientDasbboard);

module.exports = router;