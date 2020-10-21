import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
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
        <main className="container--login">

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="title">client recall</h1>
                <h2 className="command">please register</h2>
                <fieldset>
                    <label htmlFor="username"> username </label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="username" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> email </label>
                    <input ref={email} 
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="email address" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> register </button>
                </fieldset>
            </form>
        </main>
    )
}

