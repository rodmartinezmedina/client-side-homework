import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import { UsersContext } from '../contexts/UsersContext';

const ModalComponent = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  
  const toggleModal = () => setModal(!modal);

  return (
    <UsersContext.Consumer>
    {(context) => {
      const {users, updateUser} = context;
      console.log(context);

      return (
        <div>
          <Button color="primary" onClick={toggleModal}>Edit</Button>
          <Modal isOpen={modal} toggleModal={toggleModal} className={className}>
            <ModalHeader toggleModal={toggleModal}>Import User's name</ModalHeader>
            <ModalBody>
              <h1>Create a form here</h1>
              
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleModal}>Update user on click</Button>{' '}
              <Button color="secondary" onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    }}
      

    </UsersContext.Consumer>
    
  );
}

export default ModalComponent;