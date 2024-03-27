const express = require("express");
const chats = require('../Backend/Data')
const dotenv = require("dotenv")
const app = express();
dotenv.config();
const PORT = process.env.TZ || 5000 ;
app.get("/",(req,res)=>{
  res.send(chats)
})
app.get("/chats",(req,res)=>{
  res.send(chats)
})
app.get("/chats/:id",(req,res)=>{
  // console.log(req);
  let filtereddata = chats.filter((ele)=>{
   return ele._id === req.params.id;
  })
  res.send(filtereddata)
})

app.listen(PORT, console.log(`server is running ${PORT}`))