import React from "react";
import "../../assets/css/action.css";
import {
  FaGithub,
  FaPen,
  FaRegCopy,
  FaRegEnvelope,
  FaRegTrashAlt,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const PopUp = () => {
  return (
    <>
      <div className="social">
        <a
          href="https://github.com/wapborhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FaGithub />
          </i>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=borhaninfos@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FaRegEnvelope />
          </i>
        </a>
      </div>
      <div className="popup">
        <p id="EnterTag">
          Enter Tag :<span id="errorINP"></span>
        </p>
        <input
          type="text"
          id="Tags"
          maxLength="30"
          placeholder="Max 30 Words"
          autoFocus
          required
        />
        <br />
        <label htmlFor="Tags">Enter Link :</label>
        <br />
        <input type="text" id="sites" placeholder="Enter Site Link" required />
        <br />
        <div className="butCon">
          <input type="button" className="btn1" id="submit" value="Submit" />
          <input type="button" className="btn1" id="cancel" value="Cancel" />
        </div>
      </div>
      <div className="valid">
        <h4>Do you want to delete this Link.</h4>
        <button className="btn1" id="okdelete" autoFocus>
          Confirm
        </button>
        <button className="btn1" id="cancelvalid">
          Cancel
        </button>
      </div>
      <div className="main">
        <div className="title">
          <h3>Link Saver</h3>
          <div className="options">
            <h4>Tools</h4>
            <div className="btn">
              <button className="btn1" id="input-btn">
                Save Link
              </button>
              <button className="btn1" id="tab-btn">
                Save Tab
              </button>
              <button className="btn1" id="delete-btn">
                Delete All
              </button>
            </div>
          </div>
        </div>
        <div className="linkcon">
          <h4>Your Links</h4>
          <div className="search-box" id="searchBTN">
            <button className="btn-search">
              <i>
                <FaMagnifyingGlass />
              </i>
            </button>
            <input
              type="text"
              className="input-search"
              id="searchString"
              placeholder="Type to Search Tag"
              maxLength="30"
            />
          </div>
          <div className="container">
            <div className="value-con">
              <a
                href="https://www.wapborhan.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="row">
                  <input
                    type="text"
                    readOnly=""
                    className="tag"
                    value="Borhan Uddin"
                  />
                </div>
              </a>
              <div className="tools">
                <FaPen className="fa-solid" />
                <FaRegTrashAlt className="fa-solid" />
                <div className="copy" id="ele0">
                  <i className="fa-solid fa-copy"></i>
                  <FaRegCopy className="fa-solid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
