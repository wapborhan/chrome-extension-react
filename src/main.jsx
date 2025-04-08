import React, { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Providers from "./context/Providers.jsx";

createRoot(document.getElementById("root")).render(
  <Providers>
    <App />
  </Providers>
);
