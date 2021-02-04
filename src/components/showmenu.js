import React from "react";
import Button from "../components/button.js";
import "../css/showmenu.css";

const Showmenu = ({ l, ls, m, ms, r, rs, text, c }) => {
  return (
    <div className={`menu2 ${c}`}>
      <div className="menuLeft">
        <a>{l}</a>
        <br />
        <p>{ls}</p>
      </div>
      <div className="menuMiddle">
        <a>{m}</a>
        <br />
        <p>{ms}</p>
      </div>
      <div className="menuRight">
        <a>{r}</a>
        <br />
        <p>{rs}</p>
      </div>
      <div className="side">
        <Button text={text} className=" button_side_round" />
      </div>
    </div>
  );
};

export default Showmenu;
