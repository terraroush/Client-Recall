import React, { useState, createContext } from "react"

export const PhotoContext = createContext()

export const PhotoProvider = props => {
    const [photos, setPhotos] = useState([])

    const getPhotos = () => {
        return fetch("http://localhost:8088/photos?_expand=user")
            .then(res => res.json())
            .then(setPhotos)
    }

    const getPhotoById = id => {
        return fetch(`http://localhost:8088/photos/${id}?_expand=user`)
            .then(res => res.json())
    }

    const getPhotosByUserId = id => {
        return fetch(`http://localhost:8088/photos?_expand=user&userId=${id}`)
            .then(res => res.json())
            .then(setPhotos)
    }
    const getPhotosByClientId = id => {
        return fetch(`http://localhost:8088/photos?_expand=client&clientId=${id}`)
            .then(res => res.json())
            .then(setPhotos)
    }
    const getPhotosByVisitId = id => {
        return fetch(`http://localhost:8088/photos?_expand=visit&visitId=${id}`)
            .then(res => res.json())
            .then(setPhotos)
    }

    const addPhoto = photoObj => {
        return fetch("http://localhost:8088/photos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(photoObj)
        })
            .then(getPhotos)
    }
    const deletePhoto = photoObj => {
        return fetch(`http://localhost:8088/photos/${photoObj.id}`, {
            method: "DELETE"
        })
            .then(getPhotosByClientId(photoObj.clientId))
    }
    const editPhoto = photo => {
        return fetch(`http://localhost:8088/photos/${photo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(photo)
        })
            .then(getPhotos)
    }

    return (
        <PhotoContext.Provider value={{
            photos, getPhotos, addPhoto, getPhotoById, deletePhoto, editPhoto, getPhotosByUserId, getPhotosByClientId, getPhotosByVisitId
        }}>
            {props.children}
        </PhotoContext.Provider>
    )
}