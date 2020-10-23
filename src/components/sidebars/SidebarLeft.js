import React from "react"
import { useHistory } from "react-router-dom"
import "./Sidebar.css"

export const SidebarLeft = () => {
  const history = useHistory();


    return (
        <div id="mySidenav" className="sidebar-left">

            <button className="sidenavButton" id="addClient" onClick={() => history.push("/clients/create")}>add client</button>

            <button className="sidenavButton" id="addVisit">add visit</button>

            <button className="sidenavButton" id="search">search</button>
            
        </div>
    )
}