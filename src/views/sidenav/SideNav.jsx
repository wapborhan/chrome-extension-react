import React from "react";

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

            <div
              className="themingStuff"
              // style="margin-top: 30px"
            >
              {/* <!-- ⚫🟣🔵🔴🟡🟢🟠⚪ --> */}
              <div className="btn" id="themeButton">
                {/* <!-- <img src="./svgs/theme.svg" alt=""> --> */}
                <svg
                  fill="none"
                  height="100%"
                  viewBox="0 0 20 20"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="themeIconSvg"
                    className="accentColor"
                    d="M14.2778 10C13.9684 10 13.6716 9.87708 13.4528 9.65829C13.234 9.4395 13.1111 9.14275 13.1111 8.83333C13.1111 8.52391 13.234 8.22717 13.4528 8.00837C13.6716 7.78958 13.9684 7.66667 14.2778 7.66667C14.5872 7.66667 14.8839 7.78958 15.1027 8.00837C15.3215 8.22717 15.4444 8.52391 15.4444 8.83333C15.4444 9.14275 15.3215 9.4395 15.1027 9.65829C14.8839 9.87708 14.5872 10 14.2778 10ZM11.9444 6.88889C11.635 6.88889 11.3383 6.76597 11.1195 6.54718C10.9007 6.32839 10.7778 6.03164 10.7778 5.72222C10.7778 5.4128 10.9007 5.11606 11.1195 4.89726C11.3383 4.67847 11.635 4.55556 11.9444 4.55556C12.2539 4.55556 12.5506 4.67847 12.7694 4.89726C12.9882 5.11606 13.1111 5.4128 13.1111 5.72222C13.1111 6.03164 12.9882 6.32839 12.7694 6.54718C12.5506 6.76597 12.2539 6.88889 11.9444 6.88889ZM8.05556 6.88889C7.74614 6.88889 7.44939 6.76597 7.2306 6.54718C7.0118 6.32839 6.88889 6.03164 6.88889 5.72222C6.88889 5.4128 7.0118 5.11606 7.2306 4.89726C7.44939 4.67847 7.74614 4.55556 8.05556 4.55556C8.36497 4.55556 8.66172 4.67847 8.88051 4.89726C9.09931 5.11606 9.22222 5.4128 9.22222 5.72222C9.22222 6.03164 9.09931 6.32839 8.88051 6.54718C8.66172 6.76597 8.36497 6.88889 8.05556 6.88889ZM5.72222 10C5.4128 10 5.11606 9.87708 4.89726 9.65829C4.67847 9.4395 4.55556 9.14275 4.55556 8.83333C4.55556 8.52391 4.67847 8.22717 4.89726 8.00837C5.11606 7.78958 5.4128 7.66667 5.72222 7.66667C6.03164 7.66667 6.32839 7.78958 6.54718 8.00837C6.76597 8.22717 6.88889 8.52391 6.88889 8.83333C6.88889 9.14275 6.76597 9.4395 6.54718 9.65829C6.32839 9.87708 6.03164 10 5.72222 10ZM10 3C8.14348 3 6.36301 3.7375 5.05025 5.05025C3.7375 6.36301 3 8.14348 3 10C3 11.8565 3.7375 13.637 5.05025 14.9497C6.36301 16.2625 8.14348 17 10 17C10.3094 17 10.6062 16.8771 10.825 16.6583C11.0437 16.4395 11.1667 16.1428 11.1667 15.8333C11.1667 15.53 11.05 15.2578 10.8633 15.0556C10.6844 14.8456 10.5678 14.5733 10.5678 14.2778C10.5678 13.9684 10.6907 13.6716 10.9095 13.4528C11.1283 13.234 11.425 13.1111 11.7344 13.1111H13.1111C14.1425 13.1111 15.1317 12.7014 15.861 11.9721C16.5903 11.2428 17 10.2536 17 9.22222C17 5.78444 13.8656 3 10 3Z"
                    fill="#f00"
                  />
                </svg>
              </div>
              {/* <!-- -------- --> */}
              <div className="colorsContainer" id="colorsContainer">
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="red"
                />
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="yellow"
                />
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="green"
                />
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="cyan"
                />
                <input
                  id="dfChecked"
                  className="colorPlate"
                  name="color"
                  type="radio"
                  checked
                  value="blue"
                />

                {/* <!-- -------- --> */}
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="pink"
                />
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="purple"
                />
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="orange"
                />
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="brown"
                />
                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="silver"
                />

                {/* <!-- -------- --> */}

                <input
                  className="colorPlate"
                  name="color"
                  type="radio"
                  value="grey"
                />
                <input
                  className="colorPlate"
                  id="darkTheme"
                  name="color"
                  type="radio"
                  value="dark"
                />

                {/* <!-- ----Color Picker || ColorPicker---- --> */}
                <label
                  id="rangColor"
                  className="colorPlate colorPickerLabel"
                  for="colorPicker"
                >
                  Pick color
                </label>
                <input type="color" id="colorPicker" value="#EA1010" />
                {/* <!-- ----End of Color Picker || ColorPicker---- --> */}
              </div>
            </div>

            <div className="uploadClearContainer">
              {/* <!-- Upload Wallpaper Button --> */}
              <button className="uploadButton" id="uploadTrigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m11.558 13.646l-.084.071l-6.927 6.8a3.23 3.23 0 0 0 1.703.481h4.914l.356-1.423c.162-.648.497-1.24.97-1.712l2.11-2.11l-2.075-2.036l-.094-.078a.75.75 0 0 0-.873.007m4.945-5.394a.752.752 0 1 0-1.504 0a.752.752 0 0 0 1.504 0m-.843 6.441l-2.085-2.046l-.128-.117a2.25 2.25 0 0 0-2.888-.006l-.136.123l-6.938 6.81A3.23 3.23 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.499a3.25 3.25 0 0 1 3.25 3.25v4.762a3.28 3.28 0 0 0-2.608.95zM13.5 8.252a2.252 2.252 0 1 0 4.503 0a2.252 2.252 0 0 0-4.504 0m5.598 4.417l-5.901 5.901a2.7 2.7 0 0 0-.707 1.248l-.457 1.83c-.2.797.522 1.518 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706L22.33 15.9a2.286 2.286 0 0 0-3.233-3.232"
                  />
                </svg>
                <span id="uploadWallpaperText">Upload Wallpaper</span>
              </button>

              {/* <!-- Random Wallpaper Button --> */}
              <button className="randomButton" id="randomImageTrigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 1792 1600"
                >
                  <path
                    fill="currentColor"
                    // style="transform: scale(0.9); transform-origin: center"
                    d="M666 449q-60 92-137 273q-22-45-37-72.5T451.5 586t-51-56.5t-63-35T256 480H32q-14 0-23-9t-9-23V256q0-14 9-23t23-9h224q250 0 410 225m1126 799q0 14-9 23l-320 320q-9 9-23 9q-13 0-22.5-9.5t-9.5-22.5v-192q-32 0-85 .5t-81 1t-73-1t-71-5t-64-10.5t-63-18.5t-58-28.5t-59-40t-55-53.5t-56-69.5q59-93 136-273q22 45 37 72.5t40.5 63.5t51 56.5t63 35t81.5 14.5h256V928q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23m0-896q0 14-9 23l-320 320q-9 9-23 9q-13 0-22.5-9.5T1408 672V480h-256q-48 0-87 15t-69 45t-51 61.5t-45 77.5q-32 62-78 171q-29 66-49.5 111t-54 105t-64 100t-74 83t-90 68.5t-106.5 42t-128 16.5H32q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q48 0 87-15t69-45t51-61.5t45-77.5q32-62 78-171q29-66 49.5-111t54-105t64-100t74-83t90-68.5t106.5-42t128-16.5h256V32q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23"
                  />
                </svg>
              </button>

              {/* <!-- Clear Background Button --> */}
              <button className="clearButton" id="clearImage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                  />
                </svg>
              </button>

              {/* <!-- Hidden File Input --> */}
              <input type="file" id="imageUpload" accept="image/*" />
            </div>
            <div className="divider"></div>

            <div className="toggleTextsCont">
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
                  <input id="shortcutsCheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>

              <div className="ttcont" id="shortcutEditField">
                <div className="texts">
                  <div className="bigText" id="editShortcutsText">
                    Edit Shortcuts
                  </div>
                  <div className="infoText" id="shortcutsInfoText">
                    Choose which shortcuts get shown
                  </div>
                </div>
                <label className="switch">
                  <button id="shortcutEditButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      //   style="transform: scale(1.1); transform-origin: center"
                    >
                      <path d="M12 21q-.425 0-.712-.288T11 20v-4q0-.425.288-.712T12 15t.713.288T13 16v1h7q.425 0 .713.288T21 18t-.288.713T20 19h-7v1q0 .425-.288.713T12 21m-8-2q-.425 0-.712-.288T3 18t.288-.712T4 17h4q.425 0 .713.288T9 18t-.288.713T8 19zm4-4q-.425 0-.712-.288T7 14v-1H4q-.425 0-.712-.288T3 12t.288-.712T4 11h3v-1q0-.425.288-.712T8 9t.713.288T9 10v4q0 .425-.288.713T8 15m4-2q-.425 0-.712-.288T11 12t.288-.712T12 11h8q.425 0 .713.288T21 12t-.288.713T20 13zm4-4q-.425 0-.712-.288T15 8V4q0-.425.288-.712T16 3t.713.288T17 4v1h3q.425 0 .713.288T21 6t-.288.713T20 7h-3v1q0 .425-.288.713T16 9M4 7q-.425 0-.712-.288T3 6t.288-.712T4 5h8q.425 0 .713.288T13 6t-.288.713T12 7z" />
                    </svg>
                  </button>
                </label>
              </div>

              <div className="ttcont" id="shortcutEditField">
                <div className="texts">
                  <div className="bigText">Show Bookmakrs</div>
                  <div className="infoText" id="bookmakrsMessage"></div>
                </div>
              </div>

              <div className="ttcont" id="adaptiveIconField">
                <div className="texts">
                  <div className="bigText" id="adaptiveIconText">
                    Adaptive Icon Shapes
                  </div>
                  <div className="infoText" id="adaptiveIconInfoText">
                    Shortcut icons will appear smaller
                  </div>
                </div>
                <label className="switch">
                  <input id="adaptiveIconToggle" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>

              <div className="ttcont">
                <div className="texts">
                  <div className="bigText" id="ai_tools_button">
                    AI-Tools
                  </div>
                  <div className="infoText" id="enable_ai_tools">
                    Show shortcuts for AI tools
                  </div>
                </div>
                <label className="switch">
                  <input id="aiToolsCheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>

              <div className="ttcont">
                <div className="texts">
                  <div className="bigText" id="googleAppsMenuText">
                    Google Apps
                  </div>
                  <div className="infoText" id="googleAppsMenuInfo">
                    Show shortcuts for Google Apps
                  </div>
                </div>
                <label className="switch">
                  <input id="googleAppsCheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>
              {/* <!-- ---🟡--- --> */}
              <div className="ttcont">
                <div className="texts">
                  <div className="bigText" id="digitalclocktittle">
                    Digital Clock
                  </div>
                  <div className="infoText" id="digitalclockinfo">
                    Switch to the digital clock
                  </div>
                </div>
                <label className="switch">
                  <input id="digitalCheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>
              <div className="ttcont" id="timeformatField">
                <div className="texts">
                  <div className="bigText" id="timeformattittle">
                    12-Hour Format
                  </div>
                  <div className="infoText" id="timeformatinfo">
                    Use 12-hour time format
                  </div>
                </div>
                <label className="switch">
                  <input id="12hourcheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>
              <div className="ttcont" id="greetingField">
                <div className="texts">
                  <div className="bigText" id="greetingtittle">
                    Greeting
                  </div>
                  <div className="infoText" id="greetinginfo">
                    Show greeting below custom text
                  </div>
                </div>
                <label className="switch">
                  <input id="greetingcheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>
              {/* <!-- ---🟡--- --> */}
              <div className="ttcont">
                <div className="texts">
                  <div className="bigText" id="userTextTitle">
                    Customizable Text
                  </div>
                  <div className="infoText" id="userTextInfo">
                    Show custom text below the clock
                  </div>
                </div>
                <label className="switch">
                  <input id="userTextCheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>
              {/* <!-- ---🟡--- --> */}
              <div className="ttcont">
                <div className="texts">
                  <div className="bigText" id="fahrenheitCelsiusCheckbox">
                    Switch to Fahrenheit
                  </div>
                  <div className="infoText" id="fahrenheitCelsiusText">
                    Refresh the page to apply changes
                  </div>
                </div>
                <label className="switch">
                  <input id="fahrenheitCheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>
              {/* <!-- ---🟡--- --> */}
              <div className="ttcont">
                <div className="texts">
                  <div className="bigText" id="micIconTitle">
                    Hide Microphone Icon
                  </div>
                  <div className="infoText" id="micIconInfo">
                    If voice typing is not working
                  </div>
                </div>
                <label className="switch">
                  <input id="micIconCheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>

              <div className="ttcont">
                <div className="texts">
                  <div className="bigText" id="shortcut_switch">
                    Hide Search Engines
                  </div>
                  <div className="infoText" id="shortcut_switch">
                    Switch between search engines by clicking its icon
                  </div>
                </div>
                <label className="switch">
                  <input id="shortcut_switchcheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>

              {/* <!-- ---🟡--- --> */}
              <div className="ttcont">
                <div className="texts">
                  <div className="bigText" id="search_suggestions_button">
                    Search Suggestions
                  </div>
                  <div className="infoText" id="search_suggestions_text">
                    Enable search suggestions
                  </div>
                </div>
                <label className="switch">
                  <input
                    id="searchsuggestionscheckbox"
                    type="checkbox"
                    checked
                  />
                  <span className="toggle"></span>
                </label>
              </div>

              <div className="ttcont" id="proxybypassField">
                <div className="texts">
                  <div className="bigText" id="useproxytitletext">
                    Proxy Bypass
                  </div>
                  <div className="infoText" id="useproxyText">
                    If search suggestions aren't working
                  </div>
                </div>
                <label className="switch">
                  <input id="useproxyCheckbox" type="checkbox" />
                  <span className="toggle"></span>
                </label>
              </div>
              {/* <!-- ---🟡--- --> */}
              <div className="ttcont unflex" id="proxyField">
                <div className="texts">
                  <div className="bigText" id="ProxyText">
                    CORS Bypass Proxy
                  </div>
                  <div className="infoText" id="ProxySubtext">
                    Add your own CORS bypass proxy
                  </div>
                </div>
                <input
                  id="userproxy"
                  placeholder="https://mynt-proxy.rhythmcorehq.com"
                  type="text"
                />
                <div className="bottom">
                  <a
                    href="https://github.com/Minuga-RC/MYNT-CORS-Bypass-Proxy"
                    id="HostproxyButton"
                    target="_blank"
                  >
                    Host your own proxy
                  </a>
                  <button id="saveproxy">Save</button>
                </div>
              </div>

              <div
                className="ttcont unflex"
                //   style="margin-top: 100px"
              >
                <div className="texts">
                  <div className="bigText" id="UserLocText">
                    Enter your Location
                  </div>
                  <div className="infoText" id="UserLocSubtext">
                    If the weather location isn't correct
                  </div>
                </div>
                <input
                  id="userLoc"
                  placeholder="Your City or Coordinates (Latitude, Longitude)"
                  type="text"
                />
                <div className="bottom">
                  <a
                    href="https://www.weatherapi.com/docs/#intro-request-param"
                    id="InputOptionsButton"
                    target="_blank"
                  >
                    Input options
                  </a>
                  <button id="saveLoc">Save</button>
                </div>
              </div>

              <div
                className="ttcont unflex"
                //   style="margin-top: 100px"
              >
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
              </div>
              {/* <!-- ---🟡--- --> */}
            </div>
            <br />
            <div
              className="divider"
              // style="margin-top: 90px"
            ></div>
            {/* <!-- start of languageSelector --> */}
            <div className="languageSection">
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

              {/* <!-- Language selection button --> */}
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
                {/* <!-- Place new language alphabetically --> */}
              </select>
              {/* <!-- end of languageSelector --> */}
            </div>
            <br />

            {/* <!-- Settings --> */}
            <div className="backupRestoreContainer">
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
            </div>

            <input
              type="file"
              id="fileInput"
              accept=".json"
              //   style="display: none"
            />

            <div className="spacer"></div>
            <button className="resetbtn" id="resetsettings">
              Reset Settings
            </button>

            {/* <!-- ------------------ --> */}
          </div>
          {/* <!-- end of page 1 --> */}
          <div className="page" id="shortcutEditPage">
            <div className="topBar">
              <button id="backButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z" />
                </svg>
              </button>
              <div className="rightButtons">
                <button id="newShortcutButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -1 12 12"
                  >
                    <path d="M6 1.5a.5.5 0 0 0-1 0V5H1.5a.5.5 0 0 0 0 1H5v3.5a.5.5 0 0 0 1 0V6h3.5a.5.5 0 0 0 0-1H6z" />
                  </svg>
                </button>
                <button id="resetButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 15.75v-1.5h4v1.5zM14.5 21v-1.25H13v-1.5h1.5V17H16v4zm2.5-1.25v-1.5h4v1.5zM18 17v-4h1.5v1.25H21v1.5h-1.5V17zm2.775-7H18.7q-.65-2.2-2.475-3.6T12 5Q9.075 5 7.037 7.038T5 12q0 1.8.813 3.3T8 17.75V15h2v6H4v-2h2.35Q4.8 17.75 3.9 15.938T3 12q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3q3.225 0 5.663 1.988T20.775 10" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="pageTitle" id="editShortcutsList">
              Saved Shortcuts
            </div>
            <div id="editShortcutsListInfo">
              You can add new shortcuts by clicking the "+" icon or edit
              existing ones by clicking on the shortcut name or URL
            </div>
            <div id="shortcutList"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
