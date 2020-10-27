import React from "react"
import "./VisitCard.css"

export const VisitCard = ({ visit }) => {
        return (
        <section className="visitCard">
            <h4 className="visit__date">{visit.date}</h4>
            <div className="visit__cost">${visit.cost}</div>
            <div className="visit__note">{visit.note}</div>
            <div className="visit__rating">rating: {visit.rating}</div>
        </section>
    )
}