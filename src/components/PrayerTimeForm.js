import React, { useState, useEffect } from "react";
import axios from "axios";

const PrayerTimeForm = ({ editMode, prayerToEdit, onFormSubmit, prayers, fetchPrayers }) => {
const isPrayerTimeUnique = (prayers, dateStr, prayerName, prayerId) => {
  const date = new Date(dateStr);
  return !prayers.some(
    (prayer) =>
      new Date(prayer.date).toISOString().slice(0, 10) === date.toISOString().slice(0, 10) &&
      prayer.prayer === prayerName &&
      prayer._id !== prayerId
  );
};
    const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [prayerTime, setPrayerTime] = useState(
    editMode ? { ...prayerToEdit, date: formatDate(prayerToEdit.date) } : { date: "", prayer: "", time: "" }
  );
useEffect(() => {
    if (editMode) {
      setPrayerTime({ ...prayerToEdit, date: formatDate(prayerToEdit.date) });
    }
  }, [editMode, prayerToEdit]);

  const handleChange = (e) => {
    setPrayerTime({ ...prayerTime, [e.target.name]: e.target.value });
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!isPrayerTimeUnique(prayers, prayerTime.date, prayerTime.prayer, editMode ? prayerToEdit._id : null)) {
    alert("A prayer with the same name already exists for this date.");
    return;
  }
  
    const payload = {
      ...prayerTime,
      date: new Date(prayerTime.date).toISOString(),
    };

    if (editMode) {
      await axios.put(`/api/prayerTimes/${prayerTime._id}`, payload);
    } else {
      await axios.post("/api/prayerTimes", payload);
    }
  onFormSubmit();
  fetchPrayers(); 
};

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" name="date" value={prayerTime.date} onChange={handleChange} required />
      <label>Prayer:</label>
      <select name="prayer" value={prayerTime.prayer} onChange={handleChange} required>
        <option value="">Select a prayer</option>
        <option value="Fajr">Fajr</option>
        <option value="Dhuhr">Dhuhr</option>
        <option value="Asr">Asr</option>
        <option value="Maghrib">Maghrib</option>
        <option value="Isha">Isha</option>
      </select>
      <label>Time:</label>
      <input type="time" name="time" value={prayerTime.time} onChange={handleChange} required />
      <button type="submit">{editMode ? "Update" : "Add"} Prayer Time</button>
    </form>
  );
};

export default PrayerTimeForm;
