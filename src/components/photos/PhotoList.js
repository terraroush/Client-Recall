import React, { useContext, useEffect } from "react";
import { PhotoContext } from "./PhotoProvider";
import { PhotoCard } from "./PhotoCard";
import { useParams, useHistory } from "react-router-dom";
import { ClientContext } from "../clients/ClientProvider";
import { ClientDetail } from "../clients/ClientDetail";
import { Button } from "semantic-ui-react";


export const PhotoList = ({ client }) => {
  const { Photos, getPhotosByClientId } = useContext(PhotoContext);
  const { clients, getClients } = useContext(ClientContext);
  const { clientId } = useParams();
  const activeUser = parseInt(localStorage.getItem("activeUser"));
  const history = useHistory();

  useEffect(() => {
    getClients().then(() => {
      getPhotosByClientId(clientId);
    });
  }, []);

  return (
    <article className="PhotoList--grid">
      <h1 className="cursive">photos</h1>
      <Button
        className="cursive"
        fitted="true"
        size="large"
        icon="add"
        // onClick={() => history.push("/client-history/create")}
      ></Button>

      <div className="PhotoList--clientCard">
        {clients.map((client) => {
          if (client.id === +clientId) {
            return <ClientDetail key={client.id} clientId={client.id} />;
          }
        })}
      </div>
      <div className="PhotoList--list">
        {Photos
          .map((Photo) => {
            if (Photo.userId === activeUser) {
              return (
                <PhotoCard
                  key={Photo.id}
                  Photo={Photo}
                  clientId={Photo.clientId}
                />
              );
            }
          })}
      </div>
    </article>
  );
};
