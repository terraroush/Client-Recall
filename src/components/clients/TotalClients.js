import React, {useContext, useEffect} from "react"
import { ClientContext } from "./ClientProvider"

export const TotalClients = () => {
    const { clients, getClientsByUserId } = useContext(ClientContext);

    const activeUser = +localStorage.getItem("activeUser")
    
    const usersClients = clients.filter((client) => {
        if (client.userId === activeUser) {
          return client
        }
      })

      useEffect(() => {
        getClientsByUserId(activeUser)
      }, [])

  
    return (
        
        <div>
        {usersClients.length }
        </div>
       
    )
}
