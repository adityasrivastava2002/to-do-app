const Todo=require("../models/Todo");

exports.updateTodo= async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,description}=req.body;
        const todos=await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
            );
        if(!todos){
            res.status(404).json({
                status:false,
                message:"Data not found"
            })
        }
        res.status(200).json({
            success:true,
            data:todos,
            message:"Updated Successfully"
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            status:false,
            error:err,
            message:"Cannot update Todo"
        })
    }
}