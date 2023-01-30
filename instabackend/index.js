const express = require("express");
const connects= require("./config/db");
require("dotenv").config();
const router=require("./routes/routes");
const sh=express();
sh.use(express.json());
sh.use(express.urlencoded({extended:true}));
sh.use("/grocery", router);
const port=process.env.PORT || 8060
connects()
sh.get("/",(req,res)=>[
    res.send("Home page")
]);
sh.listen(port,async()=>{
    try{
        await connects;
        console.log("connected to db successfully");
    }catch{
        console.log("something wrong while connecting to db");
    }
    console.log("Server listening");
});