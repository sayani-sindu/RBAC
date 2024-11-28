const { check, validationResult } = require('validationresult');

const validateUser = [
    check('name', 'name is Required').nonEmpty(),
    check('email', 'Please provide a valid email').isMail(),
    check('password', 'Password must be at least 8 chars long').isLength({ min: 8 })
];

const validateRequest =  (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = { validateUser, validateRequest};
