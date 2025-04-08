import React, { createContext, useState, useEffect } from "react";

export const ShortcutsContext = createContext();

export const ShortcutsProvider = ({ children }) => {
  const [shortcutsEnabled, setShortcutsEnabled] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("shortcutsEnabled");
    if (savedState !== null) {
      setShortcutsEnabled(savedState === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shortcutsEnabled", shortcutsEnabled);
  }, [shortcutsEnabled]);

  return (
    <ShortcutsContext.Provider
      value={{ shortcutsEnabled, setShortcutsEnabled }}
    >
      {children}
    </ShortcutsContext.Provider>
  );
};
