const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicles.controllers");

router.get("/", vehicleController.getVehicles);
router.post("/", vehicleController.createVehicle);
router.get("/:id", vehicleController.getVehicleById);
router.put("/:id", vehicleController.editVehicle);
router.delete("/:id", vehicleController.deleteVehicle);
module.exports = router;
