const User = require('../models/user');

const getUsers = async (req, res) =>{
    try{
        const users = await User.find().select('-password');

        res.json(users);
    }
    catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};

const getUserById = async (req, res) =>{
    try{
        const id = req.params.id;
        const user = await User.findById(id).select('-password');
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        res.json(user);
    }
    catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};

module.exports = { getUsers, getUserById };