import React, { useContext, useEffect } from "react";
import { ClientContext } from "./ClientProvider";
import { ClientName } from "./ClientName";

export const ClientList = () => {
  const { clients, getClients } = useContext(ClientContext);

  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getClients();
  }, []);

  return (
    <article className="clientList--grid">
      <h1 className="cursive">
        client book </h1>
        <p><small>click for more information</small></p>

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













{/* <Button
  className="cursive"
  fitted="true"
  size="large"
  icon="add"
  onClick={() => history.push("/clients/create")}
></Button> */}