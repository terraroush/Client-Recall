import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import { Header } from "../header/Header"
import "./Login.css"

export const Register = props => {
    const username = useRef()
    const email = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            username: username.current.value,
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("activeUser", createdUser.id)
                                localStorage.setItem("username", createdUser.username)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <>
         {<Header />}
        <main className="container--login">

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>account with that email address already exists</div>
                <button className="cursive button--close" onClick={e => conflictDialog.current.close()}>close</button>
            </dialog>

            <div className="form-box">
            <form className="cursive form--login" onSubmit={handleRegister}>
                <h2 className="cursive title">create an account</h2>
                
                <fieldset className="flex">
                <legend><h3 className="command">register</h3></legend>
                    <label htmlFor="username"> username </label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="username" required autoFocus />
                
                    <label htmlFor="inputEmail"> email </label>
                    <input ref={email} 
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="email address" required />
                </fieldset>
                
                    <button className="cursive login--button" type="submit"> submit </button>
                
            </form>
            </div>
        </main>
        </>
    )
}

