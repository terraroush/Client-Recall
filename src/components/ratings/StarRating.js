// import React, { useState } from "react";
// import { Rating } from "semantic-ui-react";

// export const StarRating = () => {
//   return (
//     <>
//       <Rating
//         icon="star"
//         defaultRating={0}
//         maxRating={5}
//         name="rating"
        
//       />
      /* <div class="ui star rating" role="radiogroup" tabindex="-1">
      <i
        tabindex="0"
        aria-checked="false"
        aria-posinset="1"
        aria-setsize="4"
        class="active icon"
        role="radio"
      ></i>
      <i
        tabindex="0"
        aria-checked="false"
        aria-posinset="2"
        aria-setsize="4"
        class="active icon"
        role="radio"
      ></i>
      <i
        tabindex="0"
        aria-checked="false"
        aria-posinset="3"
        aria-setsize="4"
        class="active icon"
        role="radio"
      ></i>
      <i
        tabindex="0"
        aria-checked="false"
        aria-posinset="4"
        aria-setsize="4"
        class="icon"
        role="radio"
      ></i>
      <i
        tabindex="0"
        aria-checked="false"
        aria-posinset="5"
        aria-setsize="5"
        class="icon"
        role="radio"
      ></i>
    </div> */
//     </>
//   );
// };
// console.log(Rating)

// import React, { useState } from "react";
// import "./StarRating.css";

// const Star = ({ marked, starId }) => {
//     return (
//       <span star-id={starId} style={{ color: '#ff9933' }} role="button">
//         {marked ? '\u2605' : '\u2606'}
//       </span>
//     );
//   };

//   export const StarRating = ({ value }) => {
//     const [rating, setRating] = useState(typeof value == 'number' ? value : 0);
//     const [selection, setSelection] = useState(0);
//     const hoverOver = event => {
//       let val = 0;
//       if (event && event.target && event.target.getAttribute('star-id'))
//         val = event.target.getAttribute('star-id');
//       setSelection(val);
//     };
//     return (
//       <div
//         onMouseOut={() => hoverOver(null)}
//         onClick={event => setRating(event.target.getAttribute('star-id') || rating)}
//         onMouseOver={hoverOver}
//       >
//         {Array.from({ length: 5 }, (v, i) => (
//           <Star
//             starId={i + 1}
//             key={`star_${i + 1} `}
//             marked={selection ? selection >= i + 1 : rating >= i + 1}
//           />
//         ))}
//       </div>
//     );
//   };

// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import "./StarRating.css";

// export const StarRating = () => {
//   const [rating, setRating] = useState(null);
//   const [ratingSelection, SetRatingSelection] = useState("")
//   const [hover, setHover] = useState(null);

//   return (
//     <div >
//       {[...Array(5)].map((star, i) => {
//         const ratingValue = i + 1;
//         return (
//           <label>
//             <input
//               className="form-control starInput"
//               type="radio"
//               name="rating"
//               id={ratingValue}
//               key={ratingValue}
//               value={ratingValue}

//               onClick={() => {
//                 setRating(ratingValue)
//                 SetRatingSelection(ratingValue)
//               }}
//             />
//             <FaStar
//               className="star"
//               color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
//               size={20}
//               onMouseEnter={() => setHover(ratingValue)}
//               onMouseLeave={() => setHover(null)}
//             />
//           </label>
//         );
//       })}
//     </div>
//   );
// };
