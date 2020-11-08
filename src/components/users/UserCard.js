import React, {useContext, useEffect, useState} from "react"
import { UserContext } from "./UserProvider"
// import pic from "/Users/macuser/workspace43/client-recall/src/images/dummyPics/terraJumpsuit.jpeg"
import { Card, Icon, Image } from 'semantic-ui-react'
import "./UserCard.css"
import { TotalClients } from "../clients/TotalClients"
import { AveRating } from "../ratings/AveRating"
import { PhotoUpload } from "../photos/PhotoUpload"

export const UserCard = ({user}) => {
  const {users, getUsers} = useContext(UserContext)
  const username = localStorage.getItem("username")
  const activeUser = parseInt(localStorage.getItem("activeUser"));
  
  useEffect(() => {
    getUsers()
  }, [])

  return (

  <Card id="user-card">
    <div>{
      users.map(user => {
        if (user.id === activeUser) {
          return <img className="visit__photo" alt="profile photo" src={user.photoUrl} style={{width: "200px"}} key={user.id} userId={user.id} />
        }
      })
    }
    </div>
    

    {/* <Image src={pic} alt="profile picture" size='medium'  wrapped ui={false} /> */}
    <Card.Content className="cursive">
      <Card.Header className="cursive card-header">{username}</Card.Header>
    </Card.Content>
    <Card.Content  extra>
      <div id="colorThis">
        <Icon name='users' />
        <p>total clients</p><TotalClients /> 
      </div>

      <div id="colorThis">
      <AveRating />
      </div>
    </Card.Content>
  </Card>
  )
}