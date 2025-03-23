import React from "react";
import Watch from "./watch/Watch";
import Search from "./Search";
import { FaPencilAlt } from "react-icons/fa";

const MainSection = ({ handleHandleMenuToggle }) => {
  return (
    <main>
      <Watch />
      <Search />
    </main>
  );
};

export default MainSection;
