// const {router}=require("../routers/teachers.routes")
const Teacher=require("../models/teachers");
const teachersCtrl={};
teachersCtrl.getTeachers= async (req,res)=>{
    const teachers= await Teacher.find();
    res.json(teachers);

};
teachersCtrl.createTeacher=async (req,res)=>{
    const teacher= new Teacher({
        name:req.body.name,
        surname:req.body.surname,
        area:req.body.area,
        salary:req.body.salary
    });
    await teacher.save();
    res.json({
        status:"Teacher saved"
    });
};

teachersCtrl.getTeacher=async (req,res)=>{
    const teacher= await Teacher.findById(req.params.id);
    res.json(teacher);
};

teachersCtrl.editTeacher=async (req,res)=>{
    const {id}=req.params;
    const teacher={
        name:req.body.name,
        surname:req.body.surname,
        area:req.body.area,
        salary:req.body.salary
    };
    await Teacher.findByIdAndUpdate(id,{$set:teacher},{new:true});
    res.json({status:"Editado"});
}

teachersCtrl.deleteTeacher=async (req,res)=>{
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({status:"Delete"});
}
module.exports=teachersCtrl;