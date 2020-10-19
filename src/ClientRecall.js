import React from "react";
import { Route, Redirect } from "react-router-dom";
import {  AppViews } from "./AppViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

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
    ></Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
