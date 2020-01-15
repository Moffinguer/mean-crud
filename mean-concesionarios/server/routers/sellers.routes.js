const express= require("express");
const router=express.Router();
const sellerController=require("../controllers/sellers.controllers");

router.get("/",sellerController.getSellers);
router.get("/:id",sellerController.getSellerById);
router.post("/",sellerController.createSeller);
router.put("/:id",sellerController.editSeller);
router.delete("/:id",sellerController.deleteSeller);
module.exports=router;