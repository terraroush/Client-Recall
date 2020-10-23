import React from "react"
import "./Sidebar.css"

export const SidebarLeft = () => {
    return (
        <div id="mySidenav" className="sidebar-left">
            <a href="#" id="addClient">add client</a>
            <a href="#" id="addVisit">add visit</a>
            <a href="#" id="search">search</a>
            
        </div>
    )
}