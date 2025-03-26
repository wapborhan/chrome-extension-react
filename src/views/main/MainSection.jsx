import React from "react";
import Watch from "./watch/Watch";
import Search from "./Search";
import ShortCut from "./shortcut/ShortCut";

const MainSection = () => {
  return (
    <main>
      <Watch />
      <Search />
      <ShortCut />
    </main>
  );
};

export default MainSection;
