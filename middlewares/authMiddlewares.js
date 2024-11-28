const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) =>{
    const token = req.header("Authorization")?.replace('Bearer ', '');
    if(!token){
        return res.status(401).json({message: "Access denied. No token provided."});
    }
    try{
        const decode = jwt.verify(token, process.env.SECRET_KEY); 
        req.user = decode;
        next();  
    }
    catch(err){
        return res.status(400).json({message: "Invalid token."});
    }
}