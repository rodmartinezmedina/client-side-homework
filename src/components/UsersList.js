import React from 'react';
import { UsersContext } from "../contexts/UsersContext";
import { Button, Card, CardImg, CardBody, CardTitle,  } from 'reactstrap';

function UsersList() {
  
  return (
    <UsersContext.Consumer>    
    {(context) => { 
      const {users, updateUser, deleteUser} = context;
      console.log(context);
      return (
        <div>
          <h1>List of Users from UsersContext.js </h1>
          {users.map(oneUser => {
            return (
              <Card>
                <CardImg></CardImg>
                <CardBody>
                  <CardTitle>{oneUser.results.name.first} {oneUser.results.name.last} </CardTitle>
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </CardBody>
              </Card>
            )
          })}
        </div>
      )
    }} </UsersContext.Consumer>
  )
}

export default UsersList;