import React, { useContext, useEffect, useState } from "react";
import { ClientContext } from "./ClientProvider";
import { useHistory, useParams } from "react-router-dom";

export const ClientForm = () => {
  const { addClient, getClientById, editClient } = useContext(ClientContext);

  //for edit, hold on to state of client in this view
  const [client, setClient] = useState({});
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const { clientId } = useParams();
  const history = useHistory();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newClient = { ...client };
    //client is an object with properties.
    //set the property to the new value
    newClient[event.target.name] = event.target.value;
    //update state
    setClient(newClient);
  };

  // Get customers and locations. If animalId is in the URL, getAnimalById
  useEffect(() => {
    
        if (clientId) {
          getClientById(clientId).then((client) => {
            setClient(client);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      ;
  }, []);

  const constructClientObject = () => {
    setIsLoading(true);
    if (clientId) {
      //PUT - update
      editClient({
        id: client.id,
        name: client.name,
        email: client.email,
        phone: client.phone,
      }).then(() => history.push(`/clients/detail/${client.id}`));
    } else {
      //POST - add
      addClient({
        name: client.name,
        email: client.email,
        phone: client.phone,
      }).then(() => history.push("/clients"));
    }
  };

  return (
    <form className="clientForm">
      <h2 className="clientForm__title">
        {clientId ? "edit client" : "add client"}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="clientName">client name: </label>
          <input
            type="text"
            id="clientName"
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="client name"
            onChange={handleControlledInputChange}
            defaultValue={client.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="clientEmail">client email: </label>
          <input
            type="email"
            id="clientEmail"
            name="email"
            className="form-control"
            placeholder="client email"
            onChange={handleControlledInputChange}
            defaultValue={client.email}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="clientPhone">client phone: </label>
          <input
            type="text"
            id="clientPhone"
            name="phone"
            className="form-control"
            placeholder="client phone"
            onChange={handleControlledInputChange}
            defaultValue={client.phone}
          />
        </div>
      </fieldset>

      <button
        className="btn btn-primary"
        disabled={isLoading} // Prevent browser from submitting the form
        onClick={(event) => {
          event.preventDefault();
          constructClientObject();
        }}
      >
        {clientId ? "save client" : "add client"}
      </button>
    </form>
  );
};
