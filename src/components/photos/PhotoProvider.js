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

    const addPhoto = PhotoObj => {
        return fetch("http://localhost:8088/photos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(PhotoObj)
        })
            .then(res => res.json())
    }
    const deletePhoto = PhotoId => {
        return fetch(`http://localhost:8088/photos/${PhotoId}`, {
            method: "DELETE"
        })
            .then(getPhotos)
    }
    const editPhoto = Photo => {
        return fetch(`http://localhost:8088/photos/${Photo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Photo)
        })
            .then(getPhotos)
    }

    return (
        <PhotoContext.Provider value={{
            photos, getPhotos, addPhoto, getPhotoById, deletePhoto, editPhoto, searchTerms, setSearchTerms, getPhotosByUserId, getPhotosByClientId, getPhotosByVisitId
        }}>
            {props.children}
        </PhotoContext.Provider>
    )
}