import React, { useContext, useEffect, useState } from "react";
import { VisitContext } from "./VisitProvider";
import { ClientContext } from "../clients/ClientProvider";
import { useHistory, useParams } from "react-router-dom";

export const VisitForm = () => {
  const { addVisit, getVisitById, editVisit } = useContext(VisitContext);
  const { clients, getClients } = useContext(ClientContext);

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
    if (+visit.clientId === 0) {
      window.alert("please select a client");
    } else {
      setIsLoading(true);
      if (visitId) {
        //PUT - update
        editVisit({
          id: visit.id,
          date: Date.now(),
          cost: visit.cost,
          note: visit.note,
          rating: +visit.rating,
          clientId: +visit.clientId,
          userId: activeUser,
        })
          // .then(() => history.push(`/visits/detail/${visit.id}`))
          .then(() => setVisit({}));
      } else {
        //POST - add
        addVisit({
          id: visit.id,
          date: new Date(Date.now()).toLocaleDateString([], {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          }),
          cost: visit.cost,
          note: visit.note,
          rating: +visit.rating,
          clientId: +visit.clientId,
          userId: activeUser,
        }).then(() => history.push(`/client-history/${visit.id}`));
      }
    }
  };

  return (
    <div className="cursive formContainer">
      <form className="visitForm">
        <h2 className="visitForm__title">
          {visitId ? "edit visit" : "add visit"}
        </h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="chooseClient">choose client first: </label>
            <select
              value={visit.clientId}
              name="clientId"
              id="visitClient"
              className="form-control"
              onChange={handleControlledInputChange}
            >
              <option value="0">select client</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.firstName}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="date">date: </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              autoFocus
              className="form-control"
              onChange={handleControlledInputChange}
              defaultValue={visit.date}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
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
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="note">note: </label>
            <input
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
        </fieldset>
        <fieldset>
          <div className="form-group">
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
          className="cursive btn btn-primary"
          disabled={isLoading} // Prevent browser from submitting the form
          onClick={(event) => {
            event.preventDefault();
            constructVisitObject();
          }}
        >
          {visitId ? "save visit" : "add visit"}
        </button>
      </form>
    </div>
  );
};
