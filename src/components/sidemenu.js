import React from "react";
import Link from "../router/link.js";

const Sidemenu = ({ namme, href, c, h }) => {
  return (
    <Link href={h}>
      <div>
        <a href="">
          <li className={`header-link ${c}`}>{namme}</li>
        </a>
      </div>
    </Link>
  );
};

export default Sidemenu;
