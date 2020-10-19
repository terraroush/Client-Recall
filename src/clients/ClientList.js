import React, { useContext, useEffect, useState } from "react"
import { ClientContext } from "./ClientProvider"
import { ClientCard } from "./ClientCard"

export const ClientList = () => {
    const { clients, getClients, searchTerms } = useContext(ClientContext)
    const [ filteredClients, setFiltered ] = useState([])

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getClients()
    }, [])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching clients
            const subset = clients.filter(client => client.name.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all clients
            setFiltered(clients)
        }
    }, [searchTerms, clients])

    return (
        <>
            <h1>all clients</h1>

            <div className="clients">
				{
                    filteredClients.map(client => {
					return <ClientCard key={client.id} client={client} />
				})
				}
			</div>
        </>
    )
}

