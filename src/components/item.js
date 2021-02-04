import "../css/item.css";
import Button from "../components/button.js";
import Route from "../router/router.js";

import React from "react";

const Item = ({ title, desc, descLink, backgroundImg, leftBotnTxt, leftBotnLink, rightBtnText, rightBtnLink, twoButtons, first }) => {
  return (
    <div className="item" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="item_container">
        <div className="item_text">
          <p>{title}</p>
          <div className="item_textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="button_sec">
          <div className="item_button">
            <Button imp="primary" text={leftBotnTxt} link={leftBotnLink} />
            {twoButtons ? <Button imp="secondary" text={rightBtnText} link={rightBtnLink} /> : ""}
          </div>
        </div>
        <div className="expand">{first ? <i className="  chevron down icon  large "></i> : null}</div>
      </div>
    </div>
  );
};

export default Item;
