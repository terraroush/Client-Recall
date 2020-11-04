import React, { useContext, useEffect, useState } from "react";
import { VisitContext } from "../visits/VisitProvider";
import "./AveRating.css"

export const AveRating = () => {
  const { visits, getVisitsByUserId } = useContext(VisitContext);
  const [visit, setVisit] = useState([]);
  const activeUser = +localStorage.getItem("activeUser");

  const addScores = (runningTotal, rating) => runningTotal + rating;

  const ratingScores = visits.map((visit) => visit.rating);
  const scoresTotal = ratingScores.reduce(addScores, 0);
  const averageRating = scoresTotal / visits.length;

  useEffect(() => {
      getVisitsByUserId(activeUser).then((res) => setVisit(res));
    
  }, []);

  return (
      <>
  
  <div className="padThis">{visits.length === 0 ? "" : "average rating " }</div>
  
  <div >{visits.length === 0 ? "" :  averageRating.toFixed(1)}</div>
  </>
  )
};
