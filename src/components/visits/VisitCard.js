import React, { useContext, useEffect, useState } from "react";
import { VisitContext } from "./VisitProvider";
import { useHistory, useParams } from "react-router-dom";
import "./VisitCard.css";

export const VisitCard = ({ visit }) => {
  const { deleteVisit, getVisitsByClientId } = useContext(VisitContext);
  const history = useHistory();
  const [aVisit, setVisit] = useState({});
  const {clientId} = useParams()


  useEffect(() => {
    getVisitsByClientId(clientId)
      .then((response) => {
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
        <img className="visit__photo" src={visit.photoUrl} style={{width: "200px"}}/>
      </section>
      <button
        className="cursive"
        onClick={() => {
          history.push(`/client-history/edit/${visit.id}`);
        }}
      >
        edit
      </button>

      <button
        className="cursive"
        onClick={(e) => {
          if (window.confirm("delete this visit?"))
            deleteVisit(visit)
        }}
      >
        delete
      </button>
    </>
  );
};
