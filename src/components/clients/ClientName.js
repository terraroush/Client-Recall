import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClientDetail } from "./ClientDetail";
import { ClientContext } from "./ClientProvider";
import "./ClientName.css"

export const ClientName = ({ client }) => {
    const {clientId} = useParams()
    const { getClients } = useContext(ClientContext)

    const displayDetail = () => {
        if (clientId){
            return <ClientDetail />
        } else {
            return <ClientDetail />
        }
    }
    useEffect(() => {
        getClients()
      }, []);

  return (
    <section className="clientName-card">
      <button
        className="nameButtons"
        onClick={() => displayDetail()}
        title={client.firstName + " " + client.lastName}>
        {client.firstName + " " + client.lastName}
      </button>
      
    </section>
  );
};
