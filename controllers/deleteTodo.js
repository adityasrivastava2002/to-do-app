const Todo=require("../models/Todo");

exports.deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        await Todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            status:true,
            message:"Deleted Successfully"
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            status:false,
            error:err,
            message:"Cannot delete"
        })
    }
}