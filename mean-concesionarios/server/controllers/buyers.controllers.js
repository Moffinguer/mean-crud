const Buyer=require("../models/buyers");
const BuyerController={};
BuyerController.getBuyers= async (req,res)=>{
    const buyer= await Buyer.find();
    res.json(buyer);
};
BuyerController.createBuyer=async (req,res)=>{
    const buyer= new Buyer(req.body);
    await buyer.save();
    res.json({
        status:"Buyer saved"
    });
};

BuyerController.getBuyerById=async (req,res)=>{
    
};

BuyerController.editBuyer=async (req,res)=>{
   
}

BuyerController.deleteBuyer=async (req,res)=>{
    
}
module.exports=BuyerController;