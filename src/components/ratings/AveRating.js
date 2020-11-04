import React, { useContext, useEffect, useState } from "react";
import { VisitContext } from "../visits/VisitProvider";

export const AveRating = () => {
  const { visits, getVisitsByUserId } = useContext(VisitContext);
  const [visit, setVisit] = useState([]);
  const activeUser = +localStorage.getItem("activeUser");

  const addScores = (runningTotal, rating) => runningTotal + rating;

  const ratingScores = visits.map((visit) => visit.rating);
  const scoresTotal = ratingScores.reduce(addScores, 0);
  const averageRating = scoresTotal / visits.length;

  useEffect(() => {
    if (averageRating) {
      getVisitsByUserId(activeUser).then((res) => setVisit(res));
    } else {
    }
  }, []);

  return <div>{visits.length === 0 ? "0" : averageRating.toFixed(1)}</div>;
};
