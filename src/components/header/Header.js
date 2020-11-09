import React from "react";
import "./Header.css";
import hairLogo from "//Users/macuser/workspace43/client-recall/src/images/logo/hairdrawing.svg.png";

export const Header = () => {
  return (
    <header className="page--header">
      <div className="hairLogo-container">
        <img
          src={hairLogo}
          style={{ width: "11em" }}
          className="hairlogo"
        ></img>
      </div>

      <h1 className="header-title cursive">client recall</h1>
    </header>
  );
};
