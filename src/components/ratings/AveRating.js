import React, { useContext, useEffect, useState } from "react"
import { VisitContext } from "../visits/VisitProvider"

export const AveRating = () => {
    const { visits, getVisits } = useContext(VisitContext);
    const [ visit, setVisit ] = useState([]);
        const activeUser = +localStorage.getItem("activeUser")



        let ratingSum = 0;
        const len = visits.length
        let item = null;
        for (let i = 0; i < len; i++) {
            item = visits[i];
            ratingSum = item.rating + ratingSum;

        }
        const averageRating = ratingSum / len
        console.log("ave rating:", averageRating)
        console.log(visits)

        useEffect(() => {
            getVisits().then((response) => {
                setVisit(response);
            });
          }, []);

        return (

            <div>
                {averageRating}
            </div>
        )

}





// export const AveRating = () => {
//     const { visits, getVisits } = useContext(VisitContext);
//     const activeUser = +localStorage.getItem("activeUser")

//     const getRating = (item) => {
//         return item.rating;
//     }
//     const addScores = (runningTotal, rating) => {
        
//         return runningTotal + rating;
//     }

//     const ratingScores = visits.map(getRating)
//     const scoresTotal = ratingScores.reduce(addScores, 0)
//     const averageRating = scoresTotal / visits.length;
//     console.log("ave rating:", averageRating)
//     console.log(getRating)
    

   

//     return (
//         <div>
//             {averageRating}
//         </div>
//     )
// }