import React from "react";

const PrayerTime = () => {
  const convertToBengaliDigits = (time) => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return time.replace(/\d/g, (digit) => bengaliDigits[digit]);
  };

  const prayerTime = [
    { time: "04:30", name: "ফজর" },
    { time: "12:30", name: "যোহর" },
    { time: "15:30", name: "আসর" },
    { time: "18:30", name: "মাগরিব" },
    { time: "20:30", name: "এশা" },
  ];

  const prayerTimeList = prayerTime.map((prayer) => (
    <li
      key={prayer.name}
      className="flex tiles"
      style={{
        gap: "10px",
        padding: "5px 20px",
        justifyContent: "space-between",
      }}
    >
      <span>{prayer.name}</span>{" "}
      <span>{convertToBengaliDigits(prayer.time) + "AM"} </span>
    </li>
  ));
  return (
    <div className="flex w-full justify-center">
      <ul className="tilesContainer flex flex-col" style={{ gap: "10px" }}>
        {prayerTimeList}
      </ul>
    </div>
  );
};

export default PrayerTime;
