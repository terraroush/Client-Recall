import React, { useContext, useEffect, useState } from "react";
import { ClientContext } from "./ClientProvider";
import { useHistory } from "react-router-dom";
import "./ClientDetail.css"

export const ClientDetail = ({clientId}) => {
  const { getClientById, deleteClient } = useContext(ClientContext);
  const [ client, setClient ] = useState({});
  const history = useHistory()

  useEffect(() => {
    getClientById(clientId).then((response) => {
        setClient(response);
    });
  }, []);

  return (
    <section className="client">
      <h3 className="client__name">{client.firstName + " " + client.lastName}</h3>
      <div className="client__email">{client.email}</div>
      <div className="client__phone">{client.phone}</div>

      <button className="cursive"
        onClick={() => {
          history.push(`/clients/edit/${client.id}`);
        }}
      >
        edit
      </button>

      <button className="cursive"
        onClick={(e) => {
          if (window.confirm("delete this client?"))
            deleteClient(client.id).then(() => {
            history.push("/clients");
          });
        }}
        
        
        // {() => {
        //   deleteClient(client.id).then(() => {
        //     history.push("/clients");
        //   });
        // }}
      >
        delete
      </button>

    </section>
  );
};
