import React, { useContext, useEffect } from "react"
import { VisitContext } from "../visits/VisitProvider"


export const AveRating = () => {
    const { visits, getVisits } = useContext(VisitContext);
    const activeUser = +localStorage.getItem("activeUser")

    const getRating = (item) => {
        return item.rating;
    }
    const addScores = (runningTotal, rating) => {
        
        return runningTotal + rating;
    }

    const ratingScores = visits.map(getRating)
    const scoresTotal = ratingScores.reduce(addScores, 0)
    const averageRating = scoresTotal / visits.length;
    console.log("ave rating:", averageRating)
    

    useEffect(() => {
        getVisits();
      }, []);

    return (
        <div>
            {averageRating}
        </div>
    )
}