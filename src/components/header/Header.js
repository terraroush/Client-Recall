import React from "react"
import { NavBar } from "../nav/NavBar"
import { Logo } from "../logo/Logo"
import "./Header.css"

export const Header = () => {

    return (
        <header className="page--header">
            <Logo className="header-logo"/>
            <h1 className="header-title cursive">client recall</h1>
            {/* <NavBar className="header-nav"/> */}
        </header>
    )
}