import React from "react"
import pic from "/Users/macuser/workspace43/client-recall/src/images/dummyPics/terraJumpsuit.jpeg"
import { Card, Icon, Image } from 'semantic-ui-react'
import "./UserCard.css"
import { TotalClients } from "../clients/TotalClients"


// const totalClients = 
const username = localStorage.getItem("username")

export const UserCard = () => {

  return (

  <Card id="user-card">
    <Image src={pic} alt="profile picture" size='medium'  wrapped ui={false} />
    <Card.Content className="cursive">
      <Card.Header className="cursive card-header">{username}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='users' />
        <TotalClients /> total clients
      </a>
    </Card.Content>
  </Card>
  )
}