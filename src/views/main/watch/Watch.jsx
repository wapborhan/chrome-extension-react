import React from "react";
import PrayerTime from "./PrayerTime";
import Time from "./Time";
import Weather from "./Weather";
import usePrayerTime from "../../../hooks/usePrayerTime";

const Watch = () => {
  const [prayerTime] = usePrayerTime({
    latitude: 23.908775911770977,
    longitude: 89.12264749493718,
  });

  return (
    <div className="watch">
      <div className="ClockHolder">
        <PrayerTime prayerTime={prayerTime} />
        <Time />
        <div className="rightDiv ">
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default Watch;
