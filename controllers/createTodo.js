// import th model
const Todo=require("../models/Todo");

// define route handler
exports.createTodo=async(req,res)=>{
    try{
        // extract from req body
        const{title,description}=req.body;
        // create object nd insert in db
        const response=await Todo.create({title,description})
        // send json res with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )
    }
}
