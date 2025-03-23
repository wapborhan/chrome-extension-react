import React, { useEffect, useRef, useState } from "react";
import LinkList from "./LinkList";

const AccountSection = () => {
  const [showAccount, setShowAccount] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleAccountToggle = () => {
    setShowAccount((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the menu and the button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowAccount(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <div
        className="accountSecror"
        id="accountSecror"
        onClick={handleAccountToggle}
        ref={buttonRef} // Assign ref to button
      >
        <svg
          className="dot-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 4c-4.42 0-8 3.58-8 8c0 1.95.7 3.73 1.86 5.12a9.95 9.95 0 0 1 12.28 0A7.96 7.96 0 0 0 20 12c0-4.42-3.58-8-8-8m0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13"
            opacity="0.3"
          />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5m6.14-2.88a9.95 9.95 0 0 0-12.28 0A7.96 7.96 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12" />
          <path d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5" />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {showAccount && (
        <div
          id="accountContainer"
          className="account-container"
          ref={dropdownRef} // Assign ref to menu
        >
          <div className="account">
            <img
              src="https://lh3.googleusercontent.com/ogw/AF2bZyhMH_Dx2KPMSpfcQLAMBQqZdNR5YgXTeiKTNlYGH5-BsvM=s32-c-mo"
              alt="Name"
            />
            <div className="cont">
              <h1>Name here</h1>
              <h4>name@email.com</h4>
            </div>
            {/* <div className="mng">Manage your Account</div> */}
          </div>
          <div className="separator"></div>
          <LinkList />
        </div>
      )}
    </>
  );
};

export default AccountSection;
