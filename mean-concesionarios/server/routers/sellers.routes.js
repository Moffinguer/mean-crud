const express = require("express");
const router = express.Router();
const sellerController = require("../controllers/sellers.controllers");
const md_auth = require("../middleware/authenticated");

router.get("/", md_auth.ensureAuth, sellerController.getSellers);
router.get("/", sellerController.getSellers);
router.get("/:id", sellerController.getSellerById);
router.post("/", sellerController.createSeller);
router.put("/:id", sellerController.editSeller);
router.delete("/:id", sellerController.deleteSeller);
module.exports = router;
