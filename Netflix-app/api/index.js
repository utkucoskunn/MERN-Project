const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

const {connection_db} = require('../api/config/db')

const authRoute=require('./routes/authRoute');
const userRoute=require('./routes/usersRoute');
const moviesRoute=require('./routes/moviesRoute');
const listsRoute=require('./routes/listsRoute');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users',userRoute);
app.use('/api/movies',moviesRoute);
app.use('/api/lists',listsRoute);

connection_db();


app.listen(8800, () => {
    console.log("Backend server is running!");
})