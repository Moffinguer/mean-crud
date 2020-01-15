const express= require("express");
const router=express.Router();
const carController=require("../controllers/cars.controllers");

router.get("/",carController.getCars);
router.get("/:id",carController.getCarById);
router.post("/",carController.createCar);
router.put("/:id",carController.editCar);
router.delete("/:id",carController.deleteCar);
module.exports=router;