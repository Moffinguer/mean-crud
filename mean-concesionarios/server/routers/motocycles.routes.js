const express= require("express");
const router=express.Router();
const motocycleController=require("../controllers/motocycles.controllers");

router.get("/",motocycleController.getMotocycles);
router.get("/:id",motocycleController.getMotocycleById);
router.post("/",motocycleController.createMotocycle);
router.put("/:id",motocycleController.editMotocycle);
router.delete("/:id",motocycleController.deleteMotocycle);
module.exports=router;