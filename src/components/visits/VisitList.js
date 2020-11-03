import React, { useContext, useEffect } from "react";
import { VisitContext } from "./VisitProvider";
import { VisitCard } from "./VisitCard";
import { useParams, useHistory } from "react-router-dom";
import { ClientContext } from "../clients/ClientProvider";
import { ClientDetail } from "../clients/ClientDetail";
import { Button } from "semantic-ui-react";
import moment from "moment";
import "./VisitList.css";

export const VisitList = ({ client }) => {
  const { visits, getVisitsByClientId } = useContext(VisitContext);
  const { clients, getClients } = useContext(ClientContext);
  const { clientId } = useParams();
  const activeUser = parseInt(localStorage.getItem("activeUser"));
  const history = useHistory();

  useEffect(() => {
    getClients().then(() => {
      getVisitsByClientId(clientId);
    });
  }, []);

  return (
    <article className="visitList--grid">
      <h1 className="cursive">client history of</h1>
      <Button
        className="cursive"
        fitted="true"
        size="large"
        icon="add"
        onClick={() => history.push("/client-history/create")}
      ></Button>

      <div className="visitList--clientCard">
        {clients.map((client) => {
          if (client.id === +clientId) {
            return <ClientDetail key={client.id} clientId={client.id} />;
          }
        })}
      </div>
      <div className="visitList--list">
        {visits
          .sort(
            (a, b) =>
              moment(b.date).format("YYYYMMDD") -
              moment(a.date).format("YYYYMMDD")
          )
          .map((visit) => {
            if (visit.userId === activeUser) {
              return (
                <VisitCard
                  key={visit.id}
                  visit={visit}
                  clientId={visit.clientId}
                />
              );
            }
          })}
      </div>
    </article>
  );
};
