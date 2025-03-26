import React from "react";
import Card from "./Card";

const ShortCut = () => {
  return (
    <>
      <div className="shortCut">
        <div id="shortcuts-section">
          <div className="wrapper">
            <div id="flexMonitor"></div>
            <div id="defaultMonitor"></div>
            <div className="shortcutsContainer" id="shortcutsContainer">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortCut;
