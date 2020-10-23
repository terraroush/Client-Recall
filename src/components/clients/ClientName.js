import React, { useRef, useState } from "react";
import Modal from "../modals/Modal"
import { ClientDetail } from "./ClientDetail";
import "./ClientName.css"

export const ClientName = ({ client }) => {
  const [ setClient ] = useState({})
  const modal = useRef(null)

  const handleChosenName = (event) => {
    const newClient = { ...client }
    newClient[event.target.id] = event.target.value
    //update state
    setClient(newClient)
}

  return (
    <>
    <section className="clientName-card">
      <button
        className="nameButtons"
        value={client.id}
        onClick={() => {
          modal.current.open()
         }}
        name={client.firstName + " " + client.lastName}>
        {client.firstName + " " + client.lastName}
      </button>
      <Modal ref={modal}><ClientDetail /></Modal>
    </section>
    </>
  );
};
