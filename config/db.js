const mongoose = require('mongoose');

//Function to connect to database

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // NODE_ENV === development
        process.env.NODE_ENV === 'development' ? console.log('Connected to MongoDB in development mode') : '';
    }
    catch(err){
        console.error(err);

        //exit the process if failure occurs
        process.exit(1);

    }
};

module.exports = connectDB;