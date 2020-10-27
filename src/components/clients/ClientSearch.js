import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ClientContext } from "./ClientProvider";
import { ClientCard } from "./ClientCard";
import "./ClientSearch.css";

export const ClientSearch = () => {
  const {
    clients,
    getClientsByUserId,
    searchTerms,
    setSearchTerms,
  } = useContext(ClientContext);

  const [filteredClients, setFiltered] = useState([]);
  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getClientsByUserId(activeUser);
    setSearchTerms("");
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching clients
      const subset = clients.filter((client) =>
        client.firstName
          .toLowerCase()
          .includes(searchTerms.toLowerCase().trim())
      );
      setFiltered(subset);
    } else {
      // If the search field is blank, display all clients
      setFiltered([]);
    }
  }, [searchTerms, clients]);

  return (
    <section className="search-container">
      <div>
        client search:
        <input
          type="text"
          className="clientSearch"
          onKeyUp={(keyEvent) => setSearchTerms(keyEvent.target.value)}
          placeholder="start typing a name... "
        />
      </div>

      <div className="toggleClients">
        {filteredClients.map((client) => {
          return (
            <ClientCard key={client.id} client={client} clientId={client.id} />
          );
        })}
      </div>
    </section>
  );
};
