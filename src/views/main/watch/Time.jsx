import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState({
    hour: "12",
    min: "00",
    sec: "00",
    ampm: "AM",
    date: "00 Mon 0000",
    showDot: true,
    dayIndex: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours24 = now.getHours();
      const isAM = hours24 < 12;
      const hours12 = hours24 % 12 || 12;

      const day = now.getDate();
      const month = now.toLocaleString("default", { month: "short" });
      const year = now.getFullYear();
      const dayIndex = (now.getDay() + 1) % 7; // Shift Sunday after Saturday

      setTime((prev) => ({
        hour: String(hours12).padStart(2, "0"),
        min: String(now.getMinutes()).padStart(2, "0"),
        sec: String(now.getSeconds()).padStart(2, "0"),
        ampm: isAM ? "AM" : "PM",
        date: `${String(day).padStart(2, "0")} ${month} ${year}`,
        showDot: !prev.showDot,
        dayIndex,
      }));
    };

    const interval = setInterval(updateClock, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="digital-clock">
      <div className="flexs">
        <div id="date" className="date">
          {new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            // weekday: "long",
            year: "numeric",
            timeZone: "Asia/Dhaka",
          })
            .format(Date.now())
            .replace(/(\w+)\s/, "$1, ")}{" "}
          <br />
          {new Intl.DateTimeFormat("en-GB-u-ca-islamic", {
            day: "numeric",
            month: "long",
            // weekday: "long",
            year: "numeric",
            timeZone: "Asia/Dhaka",
          })
            .format(Date.now())
            .replace(/(\w+)\s/, "$1, ")}
        </div>
        <div className="time">
          <div id="hour" className="hour">
            {time.hour}
          </div>
          <div className={`dot ${time.showDot ? "invisible" : ""}`}>:</div>
          <div id="min" className="min">
            {time.min}
          </div>
          <div className={`dot ${time.showDot ? "invisible" : ""}`}>:</div>
          <div id="sec" className="sec">
            {time.sec}
          </div>
          <div id="ampm" className="ampm">
            {time.ampm}
          </div>
        </div>
        <div className="week" id="week">
          {["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"].map(
            (day, index) => (
              <div
                key={day}
                className={index === time.dayIndex ? "active" : ""}
              >
                {day}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Time;
