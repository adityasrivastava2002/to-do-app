const Todo=require("../models/Todo");

exports.getTodo=async(req,res)=>{
    try{
        //fetch all todos from db
        const todos=await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            error:err,
            message:"Error fetching all Todos"
        })
    }
}

exports.getTodosById=async(req,res)=>{
    try{
        const id=req.params.id;
        // extract todos on the basis of id
        const todos=await Todo.findById({_id:id});
        if(!todos){
            return res.status(404).json({
                success:false,
                message:"No data found of the given id"
            })
        }
        res.status(200).json({
            success:true,
            data:todos,
            message:"Fetched the Todo by id",
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            error:err,
            message:"Failed to fetched the Todo by id"
        })
    }
}