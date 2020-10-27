import React, { useContext, useEffect, useState } from "react"
import { VisitContext } from "./VisitProvider"
import { VisitCard } from "./VisitCard";
import { useParams } from "react-router-dom";
import { ClientCard } from "../clients/ClientCard";
import { ClientContext } from "../clients/ClientProvider";

export const VisitList = () => {
  const { visits, getVisitsByClientId } = useContext(VisitContext);
  const { clients, getClients } = useContext(ClientContext);
  const {clientId} = useParams()
  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getClients()
    .then(() => {
      getVisitsByClientId(clientId)
    })
  }, [])
  
  return (
    // this page gets run twice. 
    <article className="visitList--grid">
      <h1>client history of</h1>
      <div className="visitList--clientCard">
        {clients.map(client => {
          if (client.id === +clientId){
            return <ClientCard key={client.id} client={client} userId={client.userId} />
        }})
        }
      </div>
      <div className="visitList--list">
        {visits.map((visit) => {
          if (visit.userId === activeUser) {
            return <VisitCard key={visit.id} visit={visit} clientId={visit.clientId} />;
          }
        })}
      </div>
    </article>
  );
};

















{/* <button onClick={() => history.push("/clients/create")}>
  add client
</button> */}