const User = require('../models/user');

const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const {email, password, role} = req.body;

    try{
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({message: 'User already exists'});
        }
        const newUser = new User({email, password, role});
        await newUser.save();

        const token = jwt.generateToken(newUser._id, newUser.role);
        res.status(201).json({token, message: 'User created successfully'});
    }
    catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};

exports.loginUser = async ( req, res) => {
    const {email, password} = req.body;
    try{
        const existUser = await User.findOne({email});
        if(!existUser){
            return res.status(400).json({message: 'User does not exist'});
        }
        const isMatch = await existUser.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid password'});
        }
        const token = jwt.generateToken(existUser._id, existUser.role);

        return res.status(200).json({token});
    }
    catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};