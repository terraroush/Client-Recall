import React from "react";
import "./ClientCard.css";

export const ClientCard = ({ client }) => {
  return (
    <section className="clientCard">
      <h4 className="cursive client__name">
        {client.firstName + " " + client.lastName}
      </h4>
      <div className="client__email">{client.email}</div>
      <div className="client__phone">{client.phone}</div>
    </section>
  );
};
