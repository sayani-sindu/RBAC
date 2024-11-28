const jwt = require('jsonwebtoken');

exports.generateToken = (userId, role) =>{
    return jwt.sign({id: userId, role}, process.env.SECRET_KEY, { expiresIn : '1h'});
};