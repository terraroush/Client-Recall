import React, { useContext, useEffect } from "react";
import { UserContext } from "./users/UserProvider";
import "./Home.css";

export const Home = () => {
  const { users, getUsers } = useContext(UserContext);
  const username = localStorage.getItem("username");

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <article className="home-flex">
      <h1 className="cursive message">welcome to client recall, {username}!</h1>
      <div className="flex-home">
        <div>use the tabs on the left to:</div>
        <ul>
          <li>search for a client</li>
          <li>add a new client</li>
          <li>add a visit to a client</li>
          <li>view your client book</li>
        </ul>
      </div>
    </article>
  );
};
