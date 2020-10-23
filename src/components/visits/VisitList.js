import React, { useContext, useEffect } from "react"
import { VisitContext } from "./VisitProvider"
// import { useHistory } from "react-router-dom"
import { VisitCard } from "./VisitCard";

export const VisitList = () => {
  const { visits, getVisits } = useContext(VisitContext);

  // const history = useHistory();

  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getVisits()
  }, []);

  return (
    <article className="visitList--grid">
      <h1>visits</h1>
      {/* <button onClick={() => history.push("/clients/create")}>
        add client
      </button> */}

      <div className="visitList--list">
        {visits.map((visit) => {
          if (visit.userId === activeUser) {
            return <VisitCard key={visit.id} visit={visit} />;
          }
        })}
      </div>
    </article>
  );
};
