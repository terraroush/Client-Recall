import React from "react";

const username = localStorage.getItem("username")

export const Home = () => (
  <article className="home--grid">
    <h3>welcome to client recall, {username}!</h3>
    <div>
      use the menu on the left to:</div>
      <ul>
        <li>add a new client</li>
        <li>add to a client’s history</li>
        <li>search for a client</li>
      </ul>
      <div>as you build your books, you will see your personal stats change
    </div>
  </article>
);
