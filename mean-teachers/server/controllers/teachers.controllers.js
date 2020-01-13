// const {router}=require("../routers/teachers.routes")
const Teacher=require("../models/teachers");
const teachersCtrl={};
teachersCtrl.getTeachers= async (req,res)=>{
    const teachers= await Teacher.find();
    res.json(teachers);

};
teachersCtrl.createTeacher=async (req,res)=>{
    const teacher= new Teacher(req.body);
    await teacher.save();
    res.json({
        status:"Teacher saved"
    });
};

teachersCtrl.getTeacher=async (req,res)=>{
    const teacher= await Teacher.findById(req.params.id);
    res.json(teacher);
};

teachersCtrl.editTeacher=()=>{

}

teachersCtrl.deleteTeacher=()=>{

}
module.exports=teachersCtrl;