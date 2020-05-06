import React from "react";
import { UsersContext } from "../contexts/UsersContext";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container
} from "reactstrap";
import ModalComponent from "./Modal";

function UsersList() {
  return (
    <UsersContext.Consumer>
      {context => {
        const { users, updateUser, deleteUser } = context;
        console.log(context);

        return (
          <div>
          
            <Container>

              <Row xs="1" sm="2" lg='3' xl="4">
                {users.map(oneUser => {
                  return (
                    <Col key={oneUser.login.uuid}>
                      <Card className='user-card'>
                        <CardImg
                          top
                          width="200px"
                          src={oneUser.picture.large}
                          alt="Card image cap"
                        />
                        <CardBody className='card-body'>
                          <CardTitle className='card-title'>
                            {oneUser.name.first} {oneUser.name.last}
                          </CardTitle>
                          <CardSubtitle className='card-subtitle'>
                          Age: {oneUser.dob.age}</CardSubtitle>
                        
                          <Row className='card-btn-row'>
                            <ModalComponent className='users-list-edit-btn' 
                              idUser={oneUser.login.uuid}>
                              Edit
                            </ModalComponent>
                          
                            <Button className='users-list-delete-btn'
                              onClick={() => {
                                deleteUser(oneUser.login.uuid);
                              }}
                            >Delete
                            </Button>
                     
                          </Row>

                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        );
      }}
    </UsersContext.Consumer>
  );
}

export default UsersList;
