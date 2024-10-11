import jsonwebtoken from 'jsonwebtoken';
const { verify } = jsonwebtoken
// Middleware to verify JWT and authenticate user

const authenticateUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //     return res.status(401).json({ message: 'Access Denied. No token provided.' });
    // }

    // const token = authHeader.split(' ')[1]; // Extract token from 'Bearer token'
    // if (!token) {
    //     return res.status(401).json({ message: 'Access Denied. No token provided.' });
    // }

    try {
        // Verify the token
        const decoded = jsonwebtoken.verify(authHeader, process.env.JWT_ACCESS_SECRET);
        console.log('====================================');
        console.log("decpdetoken", decoded);
        console.log('====================================');
        // Attach the decoded user to the request object
        req.user = decoded;

        // Proceed to the next middleware/controller
        next();
    } catch (error) {
        // Catch expired or invalid token errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired' });
        }

        return res.status(401).json({ message: 'Invalid token' });
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

export { authenticateUser, isAdmin, isClient, isServiceProvider };
