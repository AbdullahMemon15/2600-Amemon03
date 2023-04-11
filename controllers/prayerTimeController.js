const PrayerTime = require("../models/prayerTime");

exports.getAllPrayers = async (req, res) => {
  try {
    const prayers = await PrayerTime.find({});
    res.json(prayers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching prayers" });
  }
};

exports.getPrayerById = async (req, res) => {
  try {
    const prayer = await PrayerTime.findById(req.params.id);
    res.json(prayer);
  } catch (error) {
    res.status(404).json({ message: "Prayer not found" });
  }
};

exports.createPrayer = async (req, res) => {
  try {
    const newPrayer = new PrayerTime(req.body);
    await newPrayer.save();
    res.status(201).json(newPrayer);
  } catch (error) {
    res.status(400).json({ message: "Error creating prayer" });
  }
};

exports.updatePrayer = async (req, res) => {
  try {
    const updatedPrayer = await PrayerTime.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPrayer);
  } catch (error) {
    res.status(400).json({ message: "Error updating prayer" });
  }
};

exports.deletePrayer = async (req, res) => {
  try {
    await PrayerTime.findByIdAndDelete(req.params.id);
    res.json({ message: "Prayer deleted" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting prayer" });
  }
};