const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("connection established"))
    .catch((error)=>{
        console.log("connection failed");
        console.error(error.mongoose);
        process.exit(1);
    });
}

module.exports=dbConnect;