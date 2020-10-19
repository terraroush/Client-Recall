import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppViews } from "./AppViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const ClientRecall = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("activeUser")) {
          return (
            <>
              <NavBar />
              <AppViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
