import React, { useContext, useEffect } from "react"
import { ClientContext } from "./ClientProvider"
import { ClientCard } from "./ClientCard"
import { useHistory } from "react-router-dom"

export const ClientList = () => {
  const { clients, getClients } = useContext(ClientContext);

  const history = useHistory();

  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getClients()
  }, []);

  return (
    <>
      <h1>all clients</h1>
      <button onClick={() => history.push("/clients/create")}>
        add client
      </button>

      <div className="clients">
        {clients.map((client) => {
          if (client.userId === activeUser) {
            return <ClientCard key={client.id} client={client} />;
          }
        })}
      </div>
    </>
  );
};
