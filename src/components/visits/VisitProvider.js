import React, { useState, createContext } from "react"

export const VisitContext = createContext()

export const VisitProvider = props => {
    const [visits, setVisits] = useState([])

    const getVisits = () => {
        return fetch("http://localhost:8088/visits?_expand=client&_expand=user")
            .then(res => res.json())
            .then(setVisits)
    }

    const getVisitById = id => {
        return fetch(`http://localhost:8088/visits/${id}?_expand=client&_expand=user`)
            .then(res => res.json())
    }
    const getVisitsByClientId = id => {
        return fetch(`http://localhost:8088/visits?_expand=client&clientId=${id}`)
            .then(res => res.json())
            .then(setVisits)
    }

    const addVisit = visitObj => {
        return fetch("http://localhost:8088/visits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(visitObj)
        })
            .then(getVisits)
    }
    const deleteVisit = visitId => {
        return fetch(`http://localhost:8088/visits/${visitId}`, {
            method: "DELETE"
        })
            .then(getVisits)
    }
    const editVisit = visit => {
        return fetch(`http://localhost:8088/visits/${visit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(visit)
        })
            .then(getVisits)
    }

    return (
        <VisitContext.Provider value={{
            visits, getVisits, addVisit, getVisitById, deleteVisit, editVisit, getVisitsByClientId
        }}>
            {props.children}
        </VisitContext.Provider>
    )
}