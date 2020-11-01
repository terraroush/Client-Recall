import React, { useContext, useEffect, useState } from "react";
import { VisitContext } from "./VisitProvider";
import { ClientContext } from "../clients/ClientProvider";
import { useHistory, useParams } from "react-router-dom";
import "./VisitForm.css";
// import { StarRating } from "../ratings/StarRating";

export const VisitForm = () => {
  const { addVisit, getVisitById, editVisit } = useContext(VisitContext);
  const { clients, getClients } = useContext(ClientContext);
  // const [rating, setRating] = useState(0);
  
  // const [rating, setRating] = useState(null);
  // const [isRatingActive, setIsRatingActive] = useState(false);

  //for edit, hold on to state of visit in this view
  const [visit, setVisit] = useState({});
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);
  const activeUser = parseInt(localStorage.getItem("activeUser"));

  const { visitId } = useParams();
  const history = useHistory();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy to make changes, and then set state.
    const newVisit = { ...visit };
    //visit is an object with properties.
    //set the property to the new value
    newVisit[event.target.name] = event.target.value;
    //update state
    setVisit(newVisit);
  };

  // If visitId is in the URL, getVisitById
  useEffect(() => {
    getClients().then(() => {
      if (visitId) {
        getVisitById(visitId).then((visit) => {
          setVisit(visit);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const constructVisitObject = () => {
    if (!+visit.clientId) {
      window.alert("please select a client");
    } else {
      setIsLoading(true);
      if (visitId) {
        //PUT - update
        editVisit({
          id: visit.id,
          date: new Date(visit.date).toLocaleDateString("en-US", {
            timeZone: "UTC",
          }),
          cost: visit.cost,
          note: visit.note,
          rating: +visit.rating,
          clientId: +visit.clientId,
          userId: activeUser,
        })
        .then(() => history.push(`/client-history/${visit.clientId}`))
        .then(() => setVisit({}));
      } else {
        addVisit({
          id: visit.id,
          date: new Date(visit.date).toLocaleDateString("en-US", {
            timeZone: "UTC",
          }),
          cost: visit.cost,
          note: visit.note,
          rating: +visit.rating,
          clientId: +visit.clientId,
          userId: activeUser,
        }).then(() => history.push(`/client-history/${visit.clientId}`));
      }
    }
  };

  return (
    <div id="formContainer" className=" formContainer">
      <form
        className="visitForm"
        onSubmit={(event) => {
          event.preventDefault();
          constructVisitObject();
          // setIsRatingActive(false)
        }}
      >
        <fieldset>
          <legend>
            <h2 className="cursive visitForm__title">
              {visitId ? "edit visit" : "add visit"}
            </h2>
          </legend>
          <div className="form-group2 chooseClient">
            <label htmlFor="chooseClient">client: </label>
            <select
              value={visit.clientId}
              name="clientId"
              required
              id="visitClient"
              className="form-control"
              autoFocus
              onChange={handleControlledInputChange}
            >
              <option value="0">select client</option>
              {clients.map((client) => {
                if (client.userId === activeUser) {
                  return (
                    <option key={client.id} value={client.id}>
                      {client.firstName}
                    </option>
                  );
                }
              })}
            </select>
          </div>

          <div className="form-group2 dateVisitForm">
            <label htmlFor="date">date: </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="form-control"
              onChange={handleControlledInputChange}
              defaultValue={visit.date}
            />
          </div>

          <div className="form-group2 costVisitForm">
            <label htmlFor="cost">cost: </label>
            <input
              type="text"
              id="cost"
              name="cost"
              required
              className="form-control"
              placeholder="cost"
              onChange={handleControlledInputChange}
              defaultValue={visit.cost}
            />
          </div>

          <div className="form-group2 noteVisitForm">
            <label htmlFor="note">note: </label>
            <textarea
              type="textarea"
              rows="4"
              cols="40"
              id="note"
              name="note"
              required
              className="form-control"
              placeholder="don't rely on your own memory! keep your notes here"
              onChange={handleControlledInputChange}
              defaultValue={visit.note}
            />
          </div>


          {/* <div className="form-group2 ratingVisitForm">
          <label htmlFor="rating">rating: </label>
            <StarRating
              required
              onChange={handleControlledInputChange}
              onClick={e => {
                        setIsRatingActive(false)
                        setRating(e.target.value)
                        
                    }}
              checked={visit.rating === {rating}}
              defaultValue={rating}
            />
          </div> */}

          <div className="form-group2 ratingVisitForm">
            <label htmlFor="rating">rating: </label>
            
            <input
              type="text"
              id="rating"
              name="rating"
              required
              className="form-control"
              placeholder="rate your service 1-5"
              onChange={handleControlledInputChange}
              defaultValue={visit.rating}
              />
            
          </div>
        </fieldset>

        <button
          className="cursive btn btn-primary-visit"
          disabled={isLoading} // Prevent browser from submitting the form
          type="submit"
        >
          {visitId ? "save visit" : "add visit"}
        </button>
      </form>
    </div>
  );
};
