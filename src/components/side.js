import React from "react";
import Route from "../router/router.js";
import ButtonCyber from "../components/buttoncyber.js";
import ShowMenu from "../components/showmenu.js";

const Side = ({ name, desc, roundButton, text, pic, path, l, ls, m, ms, r, rs, black, f, svg, solar }) => {
  return (
    <div>
      <Route path={path}>
        <div className="item" style={{ backgroundImage: `url(${pic})` }}>
          <div className="item_container">
            {svg}
            <div className="text-side">
              <div className={f}>{name}</div>
            </div>
            <div className={`menu ${solar} `}>
              <div className={`side_side ${black}`}>
                <p>{desc}</p>
              </div>
              {roundButton ? <ShowMenu c={black} l={l} ls={ls} m={m} ms={ms} r={r} rs={rs} text={text} /> : <ButtonCyber className="button_side" />}
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
};

export default Side;
