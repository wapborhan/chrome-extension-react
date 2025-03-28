import React from "react";
import { timingFormatter } from "../../../hooks/timingFormatter";

const PrayerTime = ({ prayerTime }) => {
  const prayerTimes = [
    {
      time: prayerTime && timingFormatter(prayerTime?.timings?.Fajr),
      name: "Fajr",
    },
    {
      time: prayerTime && timingFormatter(prayerTime?.timings?.Dhuhr),
      name: "Dhuhr",
    },
    {
      time: prayerTime && timingFormatter(prayerTime?.timings?.Asr),
      name: "Asr",
    },
    {
      time: prayerTime && timingFormatter(prayerTime?.timings?.Maghrib),
      name: "Maghrib",
    },
    {
      time: prayerTime && timingFormatter(prayerTime?.timings?.Isha),
      name: "Isha",
    },
  ];

  const prayerTimeList = prayerTimes.map((prayer) => (
    <li
      key={prayer.name}
      className="flex tiles"
      style={{
        gap: "5px",
        padding: "5px 10px",
        justifyContent: "space-between",
      }}
    >
      <span>{prayer.name}</span>{" "}
      <span className="text-nowrap w-full">{prayer.time}</span>
    </li>
  ));
  return (
    <div className="flex w-full justify-center">
      <ul className="tilesContainer flex flex-col" style={{ gap: "8px" }}>
        {prayerTimeList}
      </ul>
    </div>
  );
};

export default PrayerTime;
