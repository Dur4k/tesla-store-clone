import React, { useState, useRef, useEffect } from "react";
import "../css/header.css";
import "../css/burgermenu.css";
import Teslalogo from "../assets2/tesla-logo.svg";
import Sidemenu from "../components/sidemenu.js";
import Link from "../router/link.js";
import $ from "jquery";

const Header = () => {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          return $("#menuToggle input").prop("checked", false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  // $("#menuToggle input").prop("checked", true);
  // $("#menuToggle input").prop("checked", false);
  return (
    <div>
      <div className="header">
        <div className="header_logo">
          <Link className="header-link" href="/">
            <img style={{ filter: "invert(1)", width: "120px" }} src={Teslalogo} />
          </Link>
        </div>
        <div className="header_center">
          <Link className="header-link" href="/">
            <p>Model S</p>
          </Link>
          <Link className="header-link" href="/3">
            <p>Model 3</p>
          </Link>
          <Link className="header-link" href="/X">
            <p>Model X</p>
          </Link>
          <Link className="header-link" href="/Y">
            <p>Model Y</p>
          </Link>
          <Link className="header-link" href="/panels">
            <p>Solar panel</p>
          </Link>
          <Link className="header-link" href="/roofs">
            <p>Solar roof</p>
          </Link>
        </div>
        <div className="header_right">
          <nav role="navigation">
            <div id="menuToggle">
              <input ref={wrapperRef} id="closeIcon" type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <Sidemenu h="/S" c="Sbar" namme="MODEL S" href="#" />
                <Sidemenu h="/3" c="Sbar" namme="MODEL 3" href="#" />
                <Sidemenu h="/X" c="Sbar" namme="MODEL X" href="#" />
                <Sidemenu h="/Y" c="Sbar" namme="MODEL Y" href="#" />
                <Sidemenu h="/panels" c="Sbar" namme="SOLAR PANELS" href="#" />
                <Sidemenu h="/roofs" c="Sbar" namme="SOLAR ROOFS" href="#" />
                <Sidemenu h="/cyberpunk" namme="CYBERPUNK" href="#" />
                <Sidemenu h="/roadster" namme="ROADSTER" href="#" />
                <Sidemenu h="/semi" namme="SEMI" href="#" />
                <Sidemenu h="/charging" namme="CHARGING" href="#" />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
