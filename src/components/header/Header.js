import React from "react"
import { NavBar } from "../nav/NavBar"
import { Logo } from "../logo/Logo"
import "./Header.css"

export const Header = () => {

    return (
        <>
            <Logo />
            <h1 className="sticky">client recall</h1>
            <NavBar />
        </>
    )
}