import React from "react";
import { Logo } from "../logo/Logo"
import { Logout } from "../logout/Logout";
import { UserCard } from "../users/UserCard"
import "./SidebarRight.css";


export const SidebarRight = () => (
    <aside id="sidebar-right" className="sidenav sidebar-right">
      <div id="content">
        <UserCard />
        <div className="logout-container">
          <Logout />
        </div>
        
      </div>
    </aside>
  );

