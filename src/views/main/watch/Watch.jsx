import React, { useEffect, useState } from "react";
import PrayerTime from "./PrayerTime";
import Time from "./Time";
import Weather from "./Weather";
import usePrayerTime from "../../../hooks/usePrayerTime";

const Watch = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const savedLocation = localStorage.getItem("weatherLocation");
    if (savedLocation) {
      setLocation(savedLocation.split(","));
    } else {
      setLocation([23.908775911770977, 89.12264749493718]);
    }
  }, []);

  const [prayerTime] = usePrayerTime({
    latitude: location[0],
    longitude: location[1],
  });

  return (
    <div className="watch">
      <div className="ClockHolder">
        <PrayerTime prayerTime={prayerTime} />
        <Time />
        <div className="rightDiv ">
          <Weather prayerTime={prayerTime} />
        </div>
      </div>
    </div>
  );
};

export default Watch;
