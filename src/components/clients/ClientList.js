import React, { useContext, useEffect } from "react"
import { ClientContext } from "./ClientProvider"
// import { useHistory } from "react-router-dom"
import { ClientName } from "./ClientName";

export const ClientList = () => {
  const { clients, getClients } = useContext(ClientContext);

  // const history = useHistory();

  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getClients()
  }, []);

  return (
    <article className="clientList--grid">
      <h1>all clients</h1>
      {/* <button onClick={() => history.push("/clients/create")}>
        add client
      </button> */}

      <div className="clientList--list">
        {clients.map((client) => {
          if (client.userId === activeUser) {
            return <ClientName key={client.id} client={client} />;
          }
        })}
      </div>
    </article>
  );
};
