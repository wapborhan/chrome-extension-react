import React from "react";
import ColorChange from "./ColorChange";
import Wallpaper from "./Wallpaper";
import ShortCut from "./ShortCut";

const SideNav = ({ showMenu }) => {
  return (
    <nav className={`menuBar ${showMenu ? "show" : ""}`} id="menuBar">
      <div className="menuCont" id="menuCont">
        {/* <!-- ---end of rounder--- --> */}
        <div className="topDiv">
          <h1>SR NewTab</h1>
        </div>
        <div className="optCont" id="optCont">
          <div className="page" id="overviewPage">
            <div className="divider" style={{ marginBottom: "25px" }}></div>
            <ColorChange />
            <Wallpaper />
            <div className="divider"></div>
            <div className="toggleTextsCont">
              <ShortCut />

              {/* <div className="ttcont unflex" style={{ marginBottom: "50px" }}>
                <div className="texts">
                  <div className="bigText" id="WeatherApiText">
                    Enter your WeatherAPI key
                  </div>
                  <div className="infoText" id="WeatherApiSubtext">
                    If the weather functionality isn't working
                  </div>
                </div>
                <input
                  id="userAPI"
                  placeholder="Your weatherAPI key"
                  type="text"
                />
                <div className="bottom">
                  <a
                    href="https://www.weatherapi.com"
                    id="LearnMoreButton"
                    target="_blank"
                  >
                    Learn more
                  </a>
                  <button id="saveAPI">Save</button>
                </div>
              </div> */}
            </div>
            <br />
            <div
              className="divider"
              // style="margin-top: 90px"
            ></div>
            {/* <!-- start of languageSelector --> */}
            {/* <div className="languageSection">
              <div className="languageIcon">
                <svg
                  height="100%"
                  width="30px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="languageSelectorIconSvg" className="accentColor">
                    <path d="M4.545 6.714L4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292c.178.217.451.635.555.867c1.125-.359 2.08-.844 2.886-1.494c.777.665 1.739 1.165 2.93 1.472c.133-.254.414-.673.629-.89c-1.125-.253-2.057-.694-2.82-1.284c.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492a2 2 0 0 1-.94.31" />
                  </g>
                </svg>
              </div>

              <select className="languageSelector" id="languageSelector">
                <option value="en">English</option>
                <option value="bn">বাংলা (Bangla)</option>
                <option value="zh">中文 (Simplified Chinese)</option>
                <option value="cs">Čeština (Czech)</option>
                <option value="hi">हिन्दी (Hindi)</option>
                <option value="idn">Bahasa Indonesia (Indonesian)</option>
                <option value="it">Italiano (Italian)</option>
                <option value="ja">日本語 (Japanese)</option>
                <option value="ko">한국어 (Korean)</option>
                <option value="mr">मराठी (Marathi)</option>
                <option value="pt">Português (Portuguese)</option>
                <option value="ru">Русский (Russian)</option>
                <option value="es">Español (Spanish)</option>
                <option value="tr">Türkçe (Turkish)</option>
                <option value="uz">O'zbek (Uzbek)</option>
                <option value="vi">Tiếng Việt (Vietnamese)</option>
              </select>
            </div> */}
            {/* <br /> */}

            {/* <!-- Settings --> */}
            {/* <div className="backupRestoreContainer">
              <button className="backupRestoreBtn" id="backupBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20H13q-.825 0-1.412-.587T11 18v-5.15L9.4 14.4L8 13l4-4l4 4l-1.4 1.4l-1.6-1.55V18h5.5q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6T8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18H9v2zm5.5-7"
                  />
                </svg>
                <span id="backupText">Backup</span>
              </button>

              <button className="backupRestoreBtn" id="restoreBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.25 3a9.003 9.003 0 0 0-9.26 9H2.2c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8c.32-.31.09-.85-.35-.85h-1.8c0-3.9 3.18-7.05 7.1-7c3.72.05 6.85 3.18 6.9 6.9c.05 3.91-3.1 7.1-7 7.1c-1.61 0-3.1-.55-4.28-1.48a.994.994 0 0 0-1.32.08c-.42.43-.39 1.13.08 1.5a8.93 8.93 0 0 0 5.52 1.9c5.05 0 9.14-4.17 9-9.26c-.13-4.69-4.05-8.61-8.74-8.74m-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26c.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.33-.74-.75-.74"
                  />
                </svg>
                <span id="restoreText">Restore</span>
              </button>
            </div> */}

            {/* <input
              type="file"
              id="fileInput"
              accept=".json"
              //   style="display: none"
            /> */}

            {/* <div className="spacer"></div> */}
            {/* <button className="resetbtn" id="resetsettings">
              Reset Settings
            </button> */}

            {/* <!-- ------------------ --> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
