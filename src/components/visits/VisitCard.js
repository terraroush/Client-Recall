import React, { useContext, useEffect, useState } from "react"
import { VisitContext } from "./VisitProvider";
import { useHistory } from "react-router-dom";
import "./VisitCard.css"

export const VisitCard = ({visit}) => {
    const { getVisitById, deleteVisit } = useContext(VisitContext);
    const [ aVisit, setVisit ] = useState({});
    const history = useHistory()


    useEffect(() => {
        getVisitById(visit.id).then((response) => {
            setVisit(response);
        });
      }, []);

        return (
            <>
        <section className="visitCard">
            <h4 className="visit__date">{visit.date}</h4>
            <div className="visit__cost">${visit.cost}</div>
            <div className="visit__note">{visit.note}</div>
            <div className="visit__rating">rating: {visit.rating}</div>

        </section>
            <button className="cursive"
        onClick={() => {
          history.push(`/client-history/edit/${visit.id}`);
        }}
      >
        edit
      </button>

      <button className="cursive"
        onClick={() => {
          deleteVisit(visit.id).then(() => {
            history.push(`/client-history/${visit.id}`);
          });
        }}
      >
        delete
      </button>
      </>
    )
}