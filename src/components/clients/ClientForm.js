import React, { useContext, useEffect, useState, useRef } from "react";
import { ClientContext } from "./ClientProvider";
import { useHistory, useParams } from "react-router-dom";
import "./ClientForm.css";

export const ClientForm = () => {
  const { addClient, getClientById, editClient } = useContext(ClientContext);

  //for edit, hold on to state of client in this view
  const [client, setClient] = useState({});
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);
  const activeUser = parseInt(localStorage.getItem("activeUser"));

  const { clientId } = useParams();
  const history = useHistory();
  const email = useRef();
  const existDialog = useRef();

  const existingClientCheck = () => {
    return fetch(
      `http://localhost:8088/clients?email=${client.email}`
    )
      .then((res) => res.json())
      .then((client) => (client.length ? client[0] : false));
  };

  const handleControlledInputChange = (event) => {
    const newClient = { ...client };
    newClient[event.target.name] = event.target.value;
    setClient(newClient);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    existingClientCheck().then((exists) => {
      if (exists) {
        existDialog.current.showModal();
      } else {
        constructClientObject() 
      }
      
    })
  }

  // If clientId is in the URL, getClientById
  useEffect(() => {
    if (clientId) {
      getClientById(clientId).then((client) => {
        setClient(client);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructClientObject = () => {
    if (client === 0) {
      window.alert("please fill all fields")
    } else {
    setIsLoading(true);
    if (clientId) {
      
      editClient({
        id: client.id,
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        phone: +client.phone,
        userId: activeUser,
      })
        .then(() => history.push(`/client-history/${client.id}`))
        .then(() => setClient({}));
    } else {
     
      addClient({
        id: +client.id,
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        phone: +client.phone,
        userId: activeUser,
      })
      .then((clientObj) => history.push(`/client-history/${clientObj.id}`))        
    }
  }
  };

  return (
    <>
    <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>client already stored with that email</div>
        <button
          className="cursive button--close"
          onClick={(e) => existDialog.current.close()}
        >
          close
        </button>
      </dialog>

    <div className="formContainer1">
      <form
        className="clientForm"
        onSubmit={handleLogin}
      >
        <fieldset>
          <legend>
            <h2 className="cursive clientForm__title">
              {clientId ? "edit client" : "add client"}
            </h2>
          </legend>
          <div className="form-group first">
            <label htmlFor="firstName">first name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              autoFocus
              className="form-control"
              placeholder="first name"
              onChange={handleControlledInputChange}
              defaultValue={client.firstName}
            />
          </div>
        
          <div className="form-group last">
            <label htmlFor="lastName">last name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="form-control"
              placeholder="last name"
              onChange={handleControlledInputChange}
              defaultValue={client.lastName}
            />
          </div>
        
          <div className="form-group email">
            <label htmlFor="clientEmail">email: </label>
            <input
              ref={email}
              type="email"
              id="clientEmail"
              name="email"
              required
              className="form-control"
              placeholder="email"
              onChange={handleControlledInputChange}
              defaultValue={client.email}
            />
          </div>
       
          <div className="form-group phone">
            <label htmlFor="clientPhone">phone: </label>
            <input
              type="number"
              id="clientPhone"
              name="phone"
              required
              className="form-control"
              placeholder="phone"
              onChange={handleControlledInputChange}
              defaultValue={client.phone}
            />
          </div>
        </fieldset>

        <button
          className="cursive btn btn-primary"
          disabled={isLoading} // Prevent browser from submitting the form
          type="submit"
        >
          {clientId ? "save client" : "add client"}
        </button>
      </form>
    </div>
    </>
  );
};
