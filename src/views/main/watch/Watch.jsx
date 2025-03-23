import React from "react";
import PrayerTime from "./PrayerTime";
import Time from "./Time";
import Weather from "./Weather";

const Watch = () => {
  return (
    <div className="watch">
      <div className="ClockHolder">
        <PrayerTime />
        <Time />
        <div className="rightDiv ">
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default Watch;
