const express= require("express");
const router=express.Router();
const buyerController=require("../controllers/buyers.controllers");

router.get("/",buyerController.getBuyers);
router.get("/:id",buyerController.getBuyerById);
router.post("/",buyerController.createBuyer);
router.put("/:id",buyerController.editBuyer);
router.delete("/:id",buyerController.deleteBuyer);
module.exports=router;