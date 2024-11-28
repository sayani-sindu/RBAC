const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Create User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, 'minimum three letters are required']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        
    },
    password: {
        type: String,
        required: true,
        select: false,
        minLength: 8,
        maxLength: 25
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'Moderator'],
        default: 'user'
    }
});

//hashing the password before saving to the database

userSchema.pre('save', async function(next){
    //if the password not modified-- return next()
    if(!this.isModified('password')){
        return next();
    }
    try{
        const salt = bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    }
    catch(err){
        next(err);
    }
});

//create a method to compare password and entered password

userSchema.methods.comparePasswords = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

//export the model

module.exports = mongoose.model('User', userSchema);

