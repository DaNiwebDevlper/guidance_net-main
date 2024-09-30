const jwt = require('jsonwebtoken');

// Middleware to verify JWT and authenticate user
const authenticateUser = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

// Middleware to check admin role
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied. Admins only.' });
    }
    next();
};

// Middleware to check client role
const isClient = (req, res, next) => {
    if (req.user.role !== 'client') {
        return res.status(403).json({ message: 'Access Denied. Clients only.' });
    }
    next();
};

// Middleware to check service_provider role
const isServiceProvider = (req, res, next) => {
    if (req.user.role !== 'service_provider') {
        return res.status(403).json({ message: 'Access Denied. Service Providers only.' });
    }
    next();
};

module.exports = { authenticateUser, isAdmin, isClient, isServiceProvider };
