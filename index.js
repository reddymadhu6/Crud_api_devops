const express = require('express');

const app=express();

app.get('/',(req,res)=>{
    res.json({message:"Inside the container"});
})

app.get('/health',(req,res)=>{
    res.status(200).json({message:"Container is Healthy"});
})
app.listen(8000,(req,res)=>{
    console.log("Listening to port ");
})