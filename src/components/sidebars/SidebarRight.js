import React from "react";
import { Logo } from "../logo/Logo"
import "./SidebarRight.css";

const username = localStorage.getItem("username")

export const SidebarRight = () => {
  return (
    <aside id="sidebar-right" className="sidenav sidebar-right">
      <div id="content">
        <h3>{username}</h3>
        <div className="logo-container">
            <Logo />
        </div>
      </div>
    </aside>
  );
};
