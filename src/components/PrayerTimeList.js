import React from "react";
import axios from "axios";

const PrayerTimeList = ({ prayers, onEditClick, fetchPrayers }) => {
  const handleDeleteClick = async (id) => {
    await axios.delete(`/api/prayerTimes/${id}`);
    fetchPrayers();
  };

  const sortedPrayers = prayers.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;

    return a.time.localeCompare(b.time);
  });

  const uniqueDates = Array.from(
    new Set(prayers.map((prayer) => new Date(prayer.date).toLocaleDateString()))
  ).sort((a, b) => new Date(a) - new Date(b));

  return (
    <div>
      {uniqueDates.map((date) => (
        <div key={date} className="prayer-time-list">
          <h3>You prayed these prayers on this time for {date}:</h3>
          <ul>
            {prayers
              .filter((prayer) => new Date(prayer.date).toLocaleDateString() === date)
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((prayer) => (
                <li key={prayer._id}>
                  {prayer.prayer}: {prayer.time}
                  <button onClick={() => onEditClick(prayer)}>Edit</button>
                  <button onClick={() => handleDeleteClick(prayer._id)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PrayerTimeList;
