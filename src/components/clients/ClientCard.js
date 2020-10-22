import React from "react";
import { Link } from "react-router-dom"
import "./ClientCard.css"

export const ClientCard = ({ client }) => (
    <section className="clientCard">
        <h4 className="client__name">
            <Link to={`/clients/detail/${client.id}`}>{ client.firstName + " " + client.lastName }
            </Link>
        </h4>
        <div className="client__email">{client.email}</div>
      <div className="client__phone">{client.phone}</div>
    </section>

)