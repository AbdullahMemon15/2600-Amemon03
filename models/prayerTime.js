const mongoose = require("mongoose");

const prayerTimeSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  prayer: { type: String, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model("PrayerTime", prayerTimeSchema);
