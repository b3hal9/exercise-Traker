const express = require('express');
const cors= require('cors');
require('dotenv').config();
const app =express();
const mongoose =require('mongoose');
const port =process.env.PORT||50000;
app.use(cors());
app.use(express.json());

//const uri=process.env.ATLAS_URI;

//Routes
const exerciseRouter=require('./routes/exercise')
const userRouter=require('./routes/user')

app.use('/exercise',exerciseRouter)
app.use('/user',userRouter)


mongoose.connect("mongodb+srv://bsaal:M0ng09819@first-9udhf.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true })
    .then(()=>console.log('connected to MongoDb'))
    .catch(err=>console.error('disconnected',err));

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);

});