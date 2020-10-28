import React from "react"
import "./Home.css"

const username = localStorage.getItem("username")

export const Home = () => (
  <article className="home-flex">
    <h3 className="cursive">welcome to client recall, {username}!</h3>
    <div className="flex-home">
    <div>
      use the tabs on the left to:</div>
      <ul>
        <li>add a new client</li>
        <li>add a visit to a client</li>
        <li>search for a client</li>
        <li>view your client book</li>
      </ul>
      
    </div>
  </article>
);
