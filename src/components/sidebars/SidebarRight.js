import React, {useState} from "react";
import { Logout } from "../logout/Logout";
import { UserCard } from "../users/UserCard"
import { UserForm } from "../users/UserForm";
import { useToggle } from "../toggle/UseToggle"
import "./SidebarRight.css";

export const SidebarRight = () => {
  // const [isEditing, setIsEditing] = useState(false)
  const [isOn, toggleIsOn] = useToggle();

  return (
    <aside id="sidebar-right" className="sidenav sidebar-right">
      <div id="content" className="rightSideContainer">

        <button 
          className="cursive"
          type="button"
          onClick={toggleIsOn}
          >
         + edit profile +
          </button>
        <UserCard />
          {/* {isEditing ? <UserForm  /> : setIsEditing} */}

          {isOn ? <UserForm /> : "" }


        <div className="logout-container">
          <Logout />
        </div>
        
      </div>
    </aside>
  )
}

