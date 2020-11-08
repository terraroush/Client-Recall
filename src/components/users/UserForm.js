import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import {PhotoUpload} from "../photos/PhotoUpload"
import { useHistory, useParams } from "react-router-dom";
import "./UserForm.css"

export const UserForm = () => {
  const { addUser, getUsers, editUser } = useContext(UserContext);
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const activeUser = parseInt(localStorage.getItem("activeUser"));

  const handleControlledInputChange = (event) => {
    const newUser = { ...user };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };
 

  useEffect(() => {
      
    getUsers(activeUser)
      setIsLoading(false);
}, []);

  const constructUserObject = () => {
    
    setIsLoading(true);
    if (activeUser) {
      //PUT - update
      editUser({
          id: activeUser,
          username: user.username,
          email: user.email,
          photoUrl: localStorage.picture,
          
        })
        .then(() => setUser({}));
      } else {
        addUser({
          id: user.id,
          username: user.username,
          email: user.email,
          photoUrl: localStorage.picture,

        })
      }
    };
    
  return (
    <div id="User-formContainer" className="User-formContainer">
      <form 
        className="UserForm"
        onSubmit={(event) => {
          event.preventDefault();
          constructUserObject();
          event.target.reset()
          localStorage.removeItem("picture")
          
        }}
      >
      <fieldset className="user-fieldset">
          <legend>
            <h3 className="cursive userForm__title">
              update profile
            </h3>
          </legend>
      <div className="usernameUserForm">
            <label htmlFor="username">username: </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="form-control"
              onChange={handleControlledInputChange}
              defaultValue={user.username}
            />
          </div>

      <div className="emailUserForm">
            <label htmlFor="email">email: </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-control"
              onChange={handleControlledInputChange}
              defaultValue={user.email}
            />
          </div>

          <div className="UploudDiv"><PhotoUpload /></div>

          <button
          className="cursive btn btn-primary-User"
          disabled={isLoading} // Prevent browser from submitting the form
          type="submit"
          onClick={(()=>{setIsSubmitted(true)})}
        >
         save
          
        </button>
        </fieldset>
      </form>
    </div>
  );
};
