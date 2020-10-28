import React from "react";
import "./Logo.css"

export const Logo = () => {
  return (
    <svg className="header--logo"
      width="16em"
      height="18em"
      version="1.1"
      viewBox="0 0 210 297"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="101.11"
        cy="111.12"
        rx="40.097"
        ry="37.666"
        style={{fillRule:"evenodd",fill:"#f63",strokeWidth:".2748"}}
      />
      <ellipse
        cx="58.905"
        cy="91.993"
        rx="33.991"
        ry="33.351"
        style={{fillRule:"evenodd",fill:"#ffffcc",strokeWidth:".23808"}}
      />
      <ellipse
        cx="118.3"
        cy="64.375"
        rx="44.451"
        ry="42.452"
        style={{fillRule:"evenodd",fill:"#f90",strokeWidth:".30717"}}
      />
      {/* <rect
        x="2.1498"
        y="153.56"
        width="204.98"
        height="2.3926"
        style={{strokeWidth:".28302"}}
      /> */}
    </svg>
  );
};