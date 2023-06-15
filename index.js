const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 3000;

// middleware to parse json req body
app.use(express.json());

// import routes ofr todo api
const todoRoutes=require("./routes/todos");
// mount the todo api routes
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})

const dbConnect=require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOMEPAGE baby</h1>`);
})