import React from "react";
import Card from "./Card";
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";

const ShortCut = () => {
  const aiLink = [
    // Add your AI tools links here
    {
      name: "ChatGPT",
      link: "https://chatgpt.com/",
    },
    {
      name: "Gemini",
      link: "https://gemini.google.com/app",
    },
    {
      name: "Copilot",
      link: "https://copilot.microsoft.com/",
    },
    {
      name: "Perplexity",
      link: "https://www.perplexity.ai/",
    },
    {
      name: "Firefly",
      link: "https://firefly.adobe.com/",
    },
    {
      name: "DeepSeek",
      link: "https://chat.deepseek.com/",
    },
    {
      name: "BlackBox",
      link: "https://www.blackbox.ai/",
    },
    {
      name: "Bolt",
      link: "https://bolt.new/",
    },
  ];
  const shortCutLink = aiLink.map((link, idx) => {
    return <Card links={link} key={idx} />;
  });

  return (
    <>
      <div className="shortCut">
        <div id="shortcuts-section">
          <div className="wrapper">
            <div id="flexMonitor"></div>
            <div id="defaultMonitor"></div>
            <div className="shortcutsContainer" id="shortcutsContainer">
              {shortCutLink}
              <div className="shortcuts">
                <a
                  href="https://links-saver.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="shortcutLogoContainer">
                    <TiArrowRightThick />
                  </div>
                  <div className="shortcut-name">All Links</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortCut;
