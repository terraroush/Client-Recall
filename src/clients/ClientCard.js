import React, { useContext } from "react";

export const ClientCard = ({ client }) => (
    <section className="client">
        <h3 className="client__name">{ client.firstName + " " + client.lastName }</h3>
        <div className="client__email">{ client.email }</div>
        <div className="client__phone">{ client.phone }</div>
       
    </section>

)