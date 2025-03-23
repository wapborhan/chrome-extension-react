import React from "react";
import Todo from "./views/Todo";
import "./assets/css/homepage.css";
import MainSection from "./views/main/MainSection";
import PopUp from "./views/popup/PopUp";
import SideNav from "./views/sidenav/SideNav";
import { FaPencilAlt } from "react-icons/fa";
import AccountSection from "./views/accounsection/AccountSection";

function App() {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleHandleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="main-content">
        {/* <Todo /> */}
        <AccountSection />
        <MainSection handleHandleMenuToggle={handleHandleMenuToggle} />
        <div id="menuButton" onClick={handleHandleMenuToggle}>
          <FaPencilAlt />
        </div>
        {/* <PopUp /> */}
      </div>{" "}
      <SideNav
        handleHandleMenuToggle={handleHandleMenuToggle}
        showMenu={showMenu}
      />
    </>
  );
}

export default App;
