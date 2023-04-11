import React, { useState } from "react";
import Calendar from "react-calendar";

const PrayerTimeCalendar = ({ prayers }) => {
  const [value, setValue] = useState(new Date());

  const getPrayerTimesForDate = (date) => {
    return prayers.filter((prayer) => new Date(prayer.date).toDateString() === date.toDateString());
  };

const tileContent = ({ date }) => {
  const prayerTimes = getPrayerTimesForDate(date);
  if (prayerTimes.length === 0) return null;

  return (
    <ul>
      {prayerTimes.map((prayer) => (
        <li key={`${date.toDateString()}-${prayer.prayer}-${prayer.time}`}>
          {prayer.prayer}: {prayer.time}
        </li>
      ))}
    </ul>
  );
};

  return <Calendar value={value} onChange={setValue} tileContent={tileContent} />;
};

export default PrayerTimeCalendar;
