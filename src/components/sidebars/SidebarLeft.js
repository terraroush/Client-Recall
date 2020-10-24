import React from "react"
import { useHistory } from "react-router-dom"
import "./Sidebar.css"

export const SidebarLeft = () => {
  const history = useHistory();


    return (
        <div id="mySidenav" className="sidebar-left">

            <button className="cursive sidenavButton" id="addClient" onClick={() => history.push("/clients/create")}>add client</button>

            <button className="cursive sidenavButton" id="addVisit" onClick={() => history.push("/client-history/create")}>add visit</button>

            <button className="cursive sidenavButton" id="search" onClick={() => history.push("/client-history/search")}>search</button>
            
        </div>
    )
}