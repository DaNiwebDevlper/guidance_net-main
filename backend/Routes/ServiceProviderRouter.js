const { providerDasbboard } = require('../Controllers/ServiceProvider').default;
const { authenticateUser, isServiceProvider } = require('../Middlewares/Authorization');

const router = require('express').Router();

router.get('/dashboard', authenticateUser, isServiceProvider, providerDasbboard);

module.exports = router;