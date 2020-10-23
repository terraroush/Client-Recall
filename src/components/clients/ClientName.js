import React from "react";
import { ClientDetail } from "./ClientDetail";
import "./ClientName.css"

export const ClientName = ({ client }) => {

  return (
    <section className="clientName-card">
      <button
        className="nameButtons"
        onClick={() => <ClientDetail />}
        title={client.firstName + " " + client.lastName}>
        {client.firstName + " " + client.lastName}
      </button>
      
    </section>
  );
};
