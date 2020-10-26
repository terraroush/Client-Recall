import React, { useContext, useEffect, useState } from "react"
import { VisitContext } from "./VisitProvider"
import { VisitCard } from "./VisitCard";
import { useParams } from "react-router-dom";

export const VisitList = () => {
  const { visits, getVisitsByClientId } = useContext(VisitContext);
  const {clientId} = useParams()
  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getVisitsByClientId(clientId)
    
    console.log(clientId)
  }, [])
  
  return (
    <article className="visitList--grid">
      <h1>client history of</h1>
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