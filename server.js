// console.log("hello world");
const express=require("express");
const mongoose=require("mongoose");
const app=express();
// db connection
mongoose
.connect("mongodb+srv://prithvipshettyshri:prithvishetty@cluster0.udubhlf.mongodb.net/")
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err,"something went wrong");
});

app.get("/test",(req,res)=>{
    res.send("hello xxx");
});

app.listen(4000,()=>{
    console.log("serevr is connected");
});
