import React, { useState, useEffect } from "react";
import axios from "axios";
import PrayerTimeForm from "./components/PrayerTimeForm";
import PrayerTimeList from "./components/PrayerTimeList";
import PrayerTimeCalendar from "./components/PrayerTimeCalendar";
import "./App.css";



const App = () => {
  const [prayers, setPrayers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [prayerToEdit, setPrayerToEdit] = useState(null);

  useEffect(() => {
    fetchPrayers();
  }, []);

  const fetchPrayers = async () => {
    const response = await axios.get("/api/prayerTimes");
    setPrayers(response.data);
  };

  const handleEditClick = (prayer) => {
    setEditMode(true);
    setPrayerToEdit(prayer);
  };

  const handleFormSubmit = () => {
    fetchPrayers();
    setEditMode(false);
    setPrayerToEdit(null);
  };

  return (
    <div className="app-container">
      <h1>Prayer Tracker</h1>
  <PrayerTimeForm
    editMode={editMode}
    prayerToEdit={prayerToEdit}
    onFormSubmit={handleFormSubmit}
    prayers={prayers} 
    fetchPrayers={fetchPrayers}
  />
      <h3 className="note">Note: I am aware of the -1 date issue when adding and editing prayer and am working to solve this issue</h3>
      <h2>Prayer Times</h2>
      <PrayerTimeList prayers={prayers} onEditClick={handleEditClick} fetchPrayers={fetchPrayers} />
      <h2>Prayer Calendar</h2>
      <PrayerTimeCalendar prayers={prayers} />
    </div>
  );
};

export default App;
