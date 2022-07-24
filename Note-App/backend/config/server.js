const express = require('express');
const {request, response} = require("express");
const {hataYakalama}=require('./middlewares/errorMiddleware');
const {baglan}=require('./config/db');
const colors=require('colors');
const dotenv=require('dotenv').config();

const app = express();
const PORT=process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/notlar',require ('./routes/notRoute'));
app.use('/api/kullanicilar', require('./routes/kullaniciRoute'));



app.use(hataYakalama);



baglan()
app.listen(PORT,()=>{
     console.log(`Server ${PORT} üzerinden ayakta`.magenta.italic)
});
