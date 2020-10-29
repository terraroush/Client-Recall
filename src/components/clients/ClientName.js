import React from "react";
import { useHistory } from "react-router-dom";
// import { ClientDetail } from "./ClientDetail";
import "./ClientName.css"

export const ClientName = ({ client }) => {
  const history = useHistory();

  return (
    <>
    <section className="clientName-card">
      <button
        className="nameButtons"
        value={client.id}
        onClick={() => {
          history.push(`/client-history/${client.id}`)
         }}
        name={client.firstName + " " + client.lastName}>
        {client.firstName + " " + client.lastName}
      {/* <ClientDetail clientId={client.id} /> */}
      </button>
    </section>
    </>
  );
};
