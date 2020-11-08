import React, {useState} from "react";
import { Logout } from "../logout/Logout";
import { UserCard } from "../users/UserCard"
import { UserForm } from "../users/UserForm";
import "./SidebarRight.css";

export const SidebarRight = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <aside id="sidebar-right" className="sidenav sidebar-right">
      <div id="content" className="rightSideContainer">

        <button 
          className="cursive"
          type="button"
          onClick={(()=> {setIsEditing(true)})}
          >
          update?
          </button>
        <UserCard />
          {isEditing ? <UserForm  /> : setIsEditing}
        <div className="logout-container">
          <Logout />
        </div>
        
      </div>
    </aside>
  )
}

