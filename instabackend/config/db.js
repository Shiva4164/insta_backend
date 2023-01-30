const mongoose = require('mongoose');
const connects=async()=>{
    try{
        const connect= await mongoose.connect(process.env.MONGO_URI,{
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
}catch(err){
    console.error(err);
    process.exit(1);
  }
};
module.exports=connects;