import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppViews } from "../components/AppViews";
// import { NavBar } from "../components/nav/NavBar";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

export const ClientRecall = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("activeUser")) {
          return (
            <>
              
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
