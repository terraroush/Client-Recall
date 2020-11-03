import React, {useContext, useEffect} from "react"
import { UserContext } from "./UserProvider"
import pic from "/Users/macuser/workspace43/client-recall/src/images/dummyPics/terraJumpsuit.jpeg"
import { Card, Icon, Image } from 'semantic-ui-react'
import "./UserCard.css"
import { TotalClients } from "../clients/TotalClients"
import { AveRating } from "../ratings/AveRating"

export const UserCard = () => {
  const {users, getUsers} = useContext(UserContext)
  const username = localStorage.getItem("username")
  
  useEffect(() => {
    getUsers()
  }, [])

  return (

  <Card id="user-card">
    <Image src={pic} alt="profile picture" size='medium'  wrapped ui={false} />
    <Card.Content className="cursive">
      <Card.Header className="cursive card-header">{username}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='users' />
        <p>total clients</p><TotalClients /> 
      </a>

      <a>
      <p>average rating</p><AveRating />
      </a>
    </Card.Content>
  </Card>
  )
}