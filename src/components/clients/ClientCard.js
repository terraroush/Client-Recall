import React from "react";
import { Link } from "react-router-dom"

export const ClientCard = ({ client }) => (
    <section className="client">
        <h3 className="client__name">
            <Link to={`/clients/detail/${client.id}`}>{ client.firstName + " " + client.lastName }
            </Link>
        </h3>
    </section>

)