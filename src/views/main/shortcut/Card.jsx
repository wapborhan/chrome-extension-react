import React from "react";
import { IoClose } from "react-icons/io5";

const Card = ({ links }) => {
  const { name, link } = links;
  return (
    <div className="shortcuts">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="shortcutLogoContainer">
          <img
            src={`https://www.google.com/s2/favicons?domain=${link}&sz=96`}
            alt={name}
          />
        </div>
        <div className="shortcut-name">{name}</div>
      </a>
      <div className="close">
        <IoClose />
      </div>
    </div>
  );
};

export default Card;
