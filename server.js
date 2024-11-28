
//import required modules

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const connectDB = require('./config/db');

//connect to DB
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.use('/api/auth', require('./routes/auth')); // authentication routes
app.use('/api/users', require('./routes/users'));// user routes

//initializing servers
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});