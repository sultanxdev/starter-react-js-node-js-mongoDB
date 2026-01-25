import { validationResult, check } from 'express-validator';

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400);
        const errorMsg = errors.array().map(err => err.msg).join(', ');
        const error = new Error(errorMsg);
        return next(error);
    }
    next();
};

const loginValidator = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    validateRequest
];

const registerValidator = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    validateRequest
];

export {
    loginValidator,
    registerValidator
};
