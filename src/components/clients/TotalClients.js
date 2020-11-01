import React, {useContext} from "react"
import { ClientContext } from "./ClientProvider"

export const TotalClients = () => {
    const { clients} = useContext(ClientContext);

    const activeUser = +localStorage.getItem("activeUser")
    
    const usersClients = clients.filter((client) => {
        if (client.userId === activeUser) {
          return client
        }
      })

  
    return (
        
        <div>
        {usersClients.length }
        </div>
       
    )
}
