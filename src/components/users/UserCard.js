import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'
import "./UserCard.css"

// const totalClients = 
const username = localStorage.getItem("username")

export const UserCard = () => (
  <Card id="user-card">
    <Image src={'src/images/dummyPics/terraJumpsuit.jpeg'} alt="profile picture" centered size='medium'  wrapped ui={false} />
    <Card.Content>
      <Card.Header className="card-header">{username}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='users' />
        {} total clients
      </a>
    </Card.Content>
  </Card>
)
