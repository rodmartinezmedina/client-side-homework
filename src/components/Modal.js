import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
            <ModalHeader toggleModal={toggleModal}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
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