import React, { useContext } from "react";
import Watch from "./watch/Watch";
import Search from "./Search";
import ShortCut from "./shortcut/ShortCut";
import { ShortcutsContext } from "../../context/ShortcutsContext";

const MainSection = () => {
  const { shortcutsEnabled } = useContext(ShortcutsContext);

  return (
    <main>
      <Watch />
      <Search />
      {shortcutsEnabled && <ShortCut />}
    </main>
  );
};

export default MainSection;
