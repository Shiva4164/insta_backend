const jwt = require("jsonwebtoken");
const conf=require("config");
module.exports=(req,res,next)=>{
  const tok=req.header("x-auth-token");
  if(!tok){
    return res.status(401).send("Access Denied....");
  }
  try{
    const dec=jwt.verify(tok,conf.get("shiva"));
    req.user=dec;
    next();
  }catch(error){
    res.status(400).send("Invalid token....");
  }
};
