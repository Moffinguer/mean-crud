const express=require("express");
const router=express.Router();
const userCtrl=require("../controllers/users.controllers");

router.post("/register",userCtrl.saveUser);
router.post("/login",userCtrl.loginUser);
module.exports=router;