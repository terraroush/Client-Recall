import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = props => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/clients">all clients</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/client-history">client history</Link>
            </li>
        </ul>
    )
}