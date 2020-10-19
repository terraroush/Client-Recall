import React, { useContext, useEffect, useState } from "react";
import { ClientContext } from "./ClientProvider";
import { useParams } from "react-router-dom";

export const ClientDetail = () => {
  const { getClientById, deleteClient } = useContext(ClientContext);

  const [client, setClient] = useState({});
//   const [location, setLocation] = useState({});
//   const [customer, setCustomer] = useState({});

  const { clientId } = useParams();

  useEffect(() => {
    getClientById(clientId).then((response) => {
        setClient(response);
    //   setLocation(response.location);
    //   setCustomer(response.customer);
    });
  }, []);

  return (
    <section className="client">
      <h3 className="client__name">{client.firstName + " " + client.lastName}</h3>
      <div className="client__email">{client.email}</div>
      <div className="client__phone">{client.phone}</div>

      <button
        onClick={() => {
          
        }}
      >
        Edit
      </button>

      <button
        onClick={() => {
          deleteClient(client.id).then(() => {
            
          });
        }}
      >
        delete client
      </button>

    </section>
  );
};
