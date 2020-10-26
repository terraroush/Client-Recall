import React, { useState, createContext } from "react"


export const ClientContext = createContext()


export const ClientProvider = props => {
    const [clients, setClients] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getClients = () => {
        return fetch("http://localhost:8088/clients?_expand=user")
            .then(res => res.json())
            .then(setClients)
    }

    const getClientById = id => {
        return fetch(`http://localhost:8088/clients/${id}?_expand=user`)
            .then(res => res.json())
    }

    const getClientsByUserId = id => {
        return fetch(`http://localhost:8088/clients?_expand=user&userId=${id}`)
            .then(res => res.json())
            .then(setClients)
    }

    const addClient = clientObj => {
        return fetch("http://localhost:8088/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clientObj)
        })
            .then(getClients)
    }
    const deleteClient = clientId => {
        return fetch(`http://localhost:8088/clients/${clientId}`, {
            method: "DELETE"
        })
            .then(getClients)
    }
    const editClient = client => {
        return fetch(`http://localhost:8088/clients/${client.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
            .then(getClients)
    }

    return (
        <ClientContext.Provider value={{
            clients, getClients, addClient, getClientById, deleteClient, editClient, searchTerms, setSearchTerms, getClientsByUserId
        }}>
            {props.children}
        </ClientContext.Provider>
    )
}