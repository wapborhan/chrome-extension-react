import React, { useContext } from "react";
import { ShortcutsContext } from "../../context/ShortcutsContext";

const ShortCut = () => {
  const { shortcutsEnabled, setShortcutsEnabled } =
    useContext(ShortcutsContext);

  const handleToggle = () => {
    setShortcutsEnabled((prev) => !prev);
  };

  return (
    <div className="ttcont">
      <div className="texts">
        <div className="bigText" id="shortcutsText">
          Shortcuts
        </div>
        <div className="infoText" id="enableShortcutsText">
          Show saved shortcuts
        </div>
      </div>
      <label className="switch">
        <input
          id="shortcutsCheckbox"
          type="checkbox"
          checked={shortcutsEnabled}
          onChange={handleToggle}
        />
        <span className="toggle"></span>
      </label>
    </div>
  );
};

export default ShortCut;
