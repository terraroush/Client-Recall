import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "./PhotoProvider";
import { useHistory, useParams } from "react-router-dom";
import "./PhotoCard.css"

export const PhotoCard = ({ photo }) => {
  const { deletePhoto, getPhotosByClientId } = useContext(PhotoContext);
  const history = useHistory();
  const [aPhoto, setPhoto] = useState({});
  const {clientId} = useParams()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getPhotosByClientId(clientId)
    .then((response) => {
        setPhoto(response);
        setLoading(false)      
    });
  }, []);

  return (
    <>
      <section className="photoCard">
      {loading ? (
             <h5>loading...</h5>
         ): (
             <img className="photo__img" src={photo.photoUrl} style={{width: "150px"}} />
         )}

      {/* <img src={photo.photoUrl} style={{width: "150px"}} /> */}
      </section>
      <button
        className="cursive"
        onClick={() => {
          history.push(`/client-photos/edit/${photo.id}`);
        }}
      >
        edit
      </button>

      <button
        className="cursive"
        onClick={(e) => {
          if (window.confirm("delete this photo?"))
            deletePhoto(photo)
        }}
      >
        delete
      </button>
    </>
  );
};
