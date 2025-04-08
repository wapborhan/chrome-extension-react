import React from "react";
import { ShortcutsProvider } from "./ShortcutsContext";
import AuthProvider from "./AuthContext";
// Add more as needed

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ShortcutsProvider>{children}</ShortcutsProvider>
    </AuthProvider>
  );
};

export default Providers;
