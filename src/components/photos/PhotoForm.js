import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "./PhotoProvider";
import { ClientContext } from "../clients/ClientProvider";
import { useHistory, useParams } from "react-router-dom";
import { PhotoUpload } from "./PhotoUpload"

export const PhotoForm = () => {
  const { addPhoto, getPhotoById, editPhoto } = useContext(PhotoContext);
  const { clients, getClients } = useContext(ClientContext);

  const [photo, setPhoto] = useState({});
  const [client, setClient] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  const activeUser = parseInt(localStorage.getItem("activeUser"));

  const { photoId } = useParams();
  const history = useHistory();


  const handleControlledInputChange = (event) => {
    const newPhoto = { ...photo };
    newPhoto[event.target.name] = event.target.value;
    setPhoto(newPhoto);
  };

  const resetFields = {
    note: "",
    photoUrl: "",
    clientId: "",
  }

  // If PhotoId is in the URL, getPhotoById
  useEffect(() => {
    getClients().then(() => {
      if (photoId) {
        getPhotoById(photoId).then((photo) => {
          setPhoto(photo);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const constructPhotoObject = () => {
    if (!+photo.clientId) {
      window.alert("please select a client");
    } else {
      setIsLoading(true);
      if (photoId) {
        //PUT - update
        editPhoto({
          id: photo.id,
          photoUrl: photo.photoUrl,
          clientId: +photo.clientId,
          visitId: +photo.visitId,
          userId: activeUser,
        })
        // .then(() => history.push(`/client-history/${photo.clientId}`))
        .then(() => setPhoto({}));
      } else {
        addPhoto({
            id: photo.id,
            photoUrl: localStorage.picture,
            clientId: +photo.clientId,
            visitId: +photo.visitId,
            userId: activeUser,
        })
        .then(() => history.push(`/client-history/${photo.clientId}`)) 
      }
    }
  };

  return (
    <div id="formContainer" className=" formContainer">
      <form
        className="PhotoForm"
        onSubmit={(event) => {
          event.preventDefault();
          constructPhotoObject();
          localStorage.removeItem("picture")
          }}
      >
        <fieldset>
          <legend>
            <h2 className="cursive PhotoForm__title">
            add photo
              {/* {photoId ? "edit photo" : "add photo"} */}
            </h2>
          </legend>
          <div className="form-group2 chooseClient">
            <label htmlFor="chooseClient">client: </label>
            <select
              value={photo.clientId}
              name="clientId"
              required
              id="PhotoClient"
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

          <PhotoUpload />
        </fieldset>

        <button
          className="cursive btn btn-primary-photo"
          disabled={isLoading} // Prevent browser from submitting the form
          type="submit"
        >
          submit
          {/* {photoId ? "save photo" : "add photo"} */}
        </button>
      </form>
    </div>
  );
};
