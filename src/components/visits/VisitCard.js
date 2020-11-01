import React, { useContext } from "react";
import { VisitContext } from "./VisitProvider";
import { useHistory } from "react-router-dom";
import "./VisitCard.css";
// import { StarRating } from "../ratings/StarRating";

export const VisitCard = ({ visit }) => {
  const { deleteVisit } = useContext(VisitContext);
  const history = useHistory();

  return (
    <>
      <section className="visitCard">
        <h4 className="visit__date">{visit.date}</h4>
        <div className="visit__cost">${visit.cost}</div>
        <div className="visit__note">{visit.note}</div>
        <div className="visit__rating">rating: 
        {visit.rating}
        </div>
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
