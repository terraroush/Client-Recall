import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "./PhotoProvider";
import { ClientContext } from "../clients/ClientProvider";
import { useHistory, useParams } from "react-router-dom";

export const PhotoFormUpload = () => {
  const { addPhoto, getPhotoById, editPhoto } = useContext(PhotoContext);
//   const { clients, getClients } = useContext(ClientContext);

  //for edit, hold on to state of Photo in this view
//   const [photo, setPhoto] = useState({});
  const [selectedFile, setSelectedFile] = useState("")
  const [fileInputState, setFileInputState] = useState("")
  //wait for data before button is active
//   const [isLoading, setIsLoading] = useState(true);
//   const activeUser = parseInt(localStorage.getItem("activeUser"));

//   const { photoId } = useParams();
//   const history = useHistory();

//   const handleControlledInputChange = (event) => {
//     const newPhoto = { ...photo };
//     newPhoto[event.target.name] = event.target.value;
//     setPhoto(newPhoto);
//   };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
  }

  // If PhotoId is in the URL, getPhotoById
//   useEffect(() => {
//     getClients().then(() => {
//       if (photoId) {
//         getPhotoById(photoId).then((photo) => {
//           setPhoto(photo);
//           setIsLoading(false);
//         });
//       } else {
//         setIsLoading(false);
//       }
//     });
//   }, []);

//   const constructPhotoObject = () => {
//     if (!+photo.clientId) {
//       window.alert("please select a client");
//     } else {
//       setIsLoading(true);
//       if (photoId) {
//         //PUT - update
//         editPhoto({
//           id: photo.id,
//           description: photo.description,
//           clientId: +photo.clientId,
//           //   visitId: +photo.visitId,
//           userId: activeUser,
//         })
//           .then(() => history.push(`/client-history/${photo.clientId}`))
//           .then(() => setPhoto({}));
//       } else {
//         addPhoto({
//           id: photo.id,
//           description: photo.description,
//           clientId: +photo.clientId,
//           //   visitId: +photo.visitId,
//           userId: activeUser,
//         }).then(() => history.push(`/client-history/${photo.clientId}`));
//       }
//     }
//   };

  return (
    <div id="formContainer" className=" formContainer">
      <h1>upload</h1>
      <form
        className="PhotoForm"
        onSubmit={(event) => {
          event.preventDefault();
        //   constructPhotoObject();
        }}
      >
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />

        {/* <fieldset>
          <legend>
            <h2 className="cursive PhotoForm__title">
              {PhotoId ? "exchange photo" : "add photo"}
            </h2>
          </legend>
          <div className="form-group2 chooseClient">
            <label htmlFor="chooseClient">client: </label>
            <select
              value={photo.clientId}
              name="clientId"
              required
              id="photoClient"
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

          <div className="form-group2 notePhotoForm">
            <label htmlFor="description">description: </label>
            <textarea
              type="textarea"
              rows="4"
              cols="40"
              id="description"
              name="description"
              
              className="form-control"
              placeholder="what did you do?"
              onChange={handleControlledInputChange}
              defaultValue={photo.description}
            />
          </div>

        </fieldset> */}

        <button
          className="cursive btn btn-primary-photo"
        //   disabled={isLoading} 
          // Prevent browser from submitting the form
          type="submit"
        >
        submit
          {/* {photoId ? "save photo" : "add photo"} */}
        </button>
      </form>
    </div>
  );
};
