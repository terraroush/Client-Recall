import React, { useContext, useEffect, useState } from "react"
import { VisitContext } from "./VisitProvider"
import { VisitCard } from "./VisitCard";
import { useParams } from "react-router-dom";

export const VisitList = () => {
  const { visits, getVisits } = useContext(VisitContext);
  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getVisits()
  }, [])

  return (
    <article className="visitList--grid">
      <h1>client history</h1>

      <div className="visitList--list">
        {visits.map((visit) => {
          if (visit.userId === activeUser) {
            return <VisitCard key={visit.id} visit={visit}  />;
          }
        })}
      </div>
    </article>
  );
};










{/* <button onClick={() => history.push("/clients/create")}>
  add client
</button> */}