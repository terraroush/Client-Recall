import React, { useRef } from "react";
import Modal from "../modals/Modal"
import { ClientDetail } from "./ClientDetail";
import "./ClientName.css"

export const ClientName = ({ client }) => {
  const modal = useRef(null)

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
      <Modal ref={modal}><ClientDetail clientId={client.id} /></Modal>
    </section>
    </>
  );
};
