import React, { useContext, useEffect } from "react"
import { ClientContext } from "./ClientProvider"

export const ClientSearch = () => {
    const { setSearchTerms } = useContext(ClientContext)

    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <div>
            client search:
            <input type="text"
                className="clientSearch"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="search for a client... " />
        </div>
    )
}