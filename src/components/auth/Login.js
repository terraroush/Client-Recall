import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export const Login = (props) => {
  const username = useRef();
  const existDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(
      `http://localhost:8088/users?username=${username.current.value}`
    )
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists) {
        localStorage.setItem("activeUser", exists.id);
        localStorage.setItem("username", exists.username);
        history.push("/");
      } else {
        existDialog.current.showModal();
      }
    });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>user does not exist</div>
        <button
          className="button--close"
          onClick={(e) => existDialog.current.close()}
        >
          close
        </button>
      </dialog>

      <section>
        <form className="form--login" onSubmit={handleLogin}>
        <h2>welcome back</h2>
          <fieldset>
            <legend>
              <h3 className="command">log in</h3>
            </legend>
            <label htmlFor="inputUsername"> username </label>
            <input
              ref={username}
              type="text"
              id="username"
              className="form-control"
              placeholder="username"
              required
              autoFocus
            />
          </fieldset>
          <button type="submit">enter</button>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">or register here</Link>
      </section>
    </main>
  );
};
