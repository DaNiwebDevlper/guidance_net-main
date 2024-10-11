import Joi from 'joi';

const { object, string } = Joi;

// Signup Validation Middleware
const signupValidation = (req, res, next) => {
    const schema = object({
        name: string().min(3).max(100).required(),
        email: string().email().required(),
        password: string().min(4).max(100).required(),
        role: string().valid('admin', 'client', 'service_provider').default('client')
    });

    const { error } = schema.validate(req.body);

    if (error) {
        console.error('Signup Validation Error:', error.details); // Log validation error details
        return res.status(400).json({
            message: 'Bad request',
            error: error.details.map(err => err.message) // Send specific error messages
        });
    }
    next();
};

// Login Validation Middleware
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: 'Validation error',
            error: error.details[0].message
        });
    }

    next();
};

export {
    signupValidation, loginValidation
}