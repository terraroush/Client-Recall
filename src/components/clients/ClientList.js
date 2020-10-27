import React, { useContext, useEffect } from "react";
import { ClientContext } from "./ClientProvider";
import { useHistory } from "react-router-dom";
import { ClientName } from "./ClientName";
// import { Button } from "semantic-ui-react";

export const ClientList = () => {
  const { clients, getClients } = useContext(ClientContext);

  // const history = useHistory();

  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getClients();
  }, []);

  return (
    <article className="clientList--grid">
      <h1 className="cursive">
        edit clients </h1>
        <p><small>click to edit or delete</small></p>
        {/* <Button
          className="cursive"
          fitted="true"
          size="large"
          icon="add"
          onClick={() => history.push("/clients/create")}
        ></Button> */}

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
