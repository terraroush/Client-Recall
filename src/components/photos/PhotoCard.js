import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "./PhotoProvider";
import { useHistory, useParams } from "react-router-dom";

export const PhotoCard = ({ photo }) => {
  const { deletePhoto, getPhotoByClientId } = useContext(PhotoContext);
  const history = useHistory();
  const [aPhoto, setPhoto] = useState({});
  const {clientId} = useParams()


  useEffect(() => {
    getPhotoByClientId(clientId).then((response) => {
        setPhoto(response);
      
    });
  }, []);

  return (
    <>
      <section className="photoCard">
        <div className="photo__note">{photo.description}</div>
      </section>
      <button
        className="cursive"
        // onClick={() => {
        //   history.push(`/client-history/edit/${photo.id}`);
        // }}
      >
        edit
      </button>

      <button
        className="cursive"
        // onClick={(e) => {
        //   if (window.confirm("delete this photo?"))
        //     deletePhoto(photo)
        // }}
      >
        delete
      </button>
    </>
  );
};
