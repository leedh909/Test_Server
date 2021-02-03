const express = require("express");
const app = express();
const PORT = process.env.PORT || 9999;
const db = require('./db');

app.patch('/api/products',(req,res)=>{
app.delete('/api/products',(req,res)=>{
app.get('/api/products',(req,res)=>{
app.post('/api/products',(req,res)=>{
    
    db.pool.query("select Firstname from person.person",(err,data)=>{
        if(!err) res.send({product:data});
        else res.send(err);
    })
})

app.listen(PORT,()=>{
    console.log(`Server On: http:..localhost:${PORT}/`);
})