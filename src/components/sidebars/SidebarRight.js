import React from "react";
import { Logo } from "../logo/Logo"
import { UserCard } from "../users/UserCard"
import "./SidebarRight.css";


export const SidebarRight = () => {
  return (
    <aside id="sidebar-right" className="sidenav sidebar-right">
      <div id="content">
        <UserCard />
        <div className="logo-container">
            <Logo />
        </div>
      </div>
    </aside>
  );
};
