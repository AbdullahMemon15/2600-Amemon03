const express = require("express");
const router = express.Router();
const prayerController = require("../controllers/prayerTimeController");

router.get("/", prayerController.getAllPrayers);
router.get("/:id", prayerController.getPrayerById);
router.post("/", prayerController.createPrayer);
router.put("/:id", prayerController.updatePrayer);
router.delete("/:id", prayerController.deletePrayer);

module.exports = router;

