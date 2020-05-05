import React from 'react';
import { UsersContext } from "../contexts/UsersContext";
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';


function UsersList() {

  return (
    <UsersContext.Consumer>    
    {(context) => { 

      const {users, updateUser, deleteUser} = context;
      console.log(context);

      return (
        <div>
        <Container>
          <Row><h1>List of Users from UsersContext.js </h1></Row>
          <Row xs="1" sm="2" lg="4">
            { users.map( (oneUser) => {
            return (
              <Col>
                <Card>
                  <CardImg top width='200px' src={oneUser.picture.thumbnail} alt="Card image cap"/>
                  <CardBody>
                    <CardTitle>{oneUser.name.first} {oneUser.name.last}</CardTitle>
                    <CardSubtitle>Age: {oneUser.dob.age}</CardSubtitle>
                    <CardSubtitle>{oneUser.location.city}, {oneUser.location.state} </CardSubtitle>
                    
                    <Button>Edit</Button>
                    <Button onClick={() => {deleteUser(oneUser.login.uuid)}}>Delete</Button>
                  </CardBody>
                </Card>
                </Col>
            )
          })}

          </Row>
          
        </Container>
        </div>
      )
      
    }} 
    </UsersContext.Consumer>
  )
}

export default UsersList;