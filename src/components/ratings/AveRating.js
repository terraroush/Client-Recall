import React, { useContext, useEffect, useState } from "react"
import { VisitContext } from "../visits/VisitProvider"
// import { useParams } from "react-router-dom";


export const AveRating = () => {
    const { visits, getVisitsByUserId } = useContext(VisitContext);
    const [ visit, setVisit ] = useState([])
    const activeUser = +localStorage.getItem("activeUser")
    // const { clientId } = useParams();
        
    const addScores = (runningTotal, rating) => runningTotal + rating;
    
    const ratingScores = visits.map(visit => visit.rating)
    const scoresTotal = ratingScores.reduce(addScores, 0)
    const averageRating = scoresTotal / visits.length;
    console.log("ave rating:", averageRating)
    console.log(scoresTotal)
    console.log(visits.length)
    // console.log("client id", clientId)
    
    useEffect(() => {
        getVisitsByUserId(activeUser).then((res) => setVisit(res))
    }, [])

    return (
        <div>
            {/* {clientId ? "average rating " : "overall average "} */}
            {averageRating.toFixed(1)}
        </div>
    )
}