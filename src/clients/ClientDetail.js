import React, { useContext, useEffect, useState } from "react";
import { ClientContext } from "./ClientProvider";
import { useParams, useHistory } from "react-router-dom";

export const ClientDetail = () => {
  const { getClientById, deleteClient } = useContext(ClientContext);
  const [ client, setClient ] = useState({});
  const { clientId } = useParams();
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

      <button
        onClick={() => {
          history.push(`/clients/edit/${client.id}`);
        }}
      >
        edit
      </button>

      <button
        onClick={() => {
          deleteClient(client.id).then(() => {
            history.push("/clients");
          });
        }}
      >
        delete client
      </button>

    </section>
  );
};
