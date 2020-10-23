import React, { useRef } from "react";
import Modal from "../modals/Modal"
// import { ClientDetail } from "./ClientDetail";
import "./ClientName.css"

export const ClientName = ({ client }) => {
  const modal = useRef(null)

  return (
    <>
    <section className="clientName-card">
      <button
        className="nameButtons"
        onClick={() => modal.current.open()}
        title={client.firstName + " " + client.lastName}>
        {client.firstName + " " + client.lastName}
      </button>
      <Modal ref={modal}>Did it work?</Modal>
    </section>
    </>
  );
};
