import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Alert, Badge, Form, FormGroup, Label, Input } from "reactstrap";
import { UsersContext } from "../contexts/UsersContext";

const ModalComponent = props => {
  const { buttonLabel, className, idUser } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <UsersContext.Consumer>
      {context => {
        const { users, updateUser, getUser, handleChange } = context;

        const user = getUser(idUser);
        const handleUpdate = formData => {
          /* user data here
          * const newUserData = {
            ...user,
            phone: formData.phone,
          }
          */
          //updateUser(newUserData);
        };

        return (
          <>
            {user && (
              <div>
                <Button color="primary" onClick={toggleModal}>
                  Edit
                </Button>
                <Modal
                  isOpen={modal}
                  toggleModal={toggleModal}
                  className={className}
                >
                  <ModalHeader className='modal-header' toggleModal={toggleModal}>
                    <h3>Update User's details</h3>      
                  </ModalHeader>
                  <ModalBody className='modal-body'>

                    <Form>
                      <FormGroup>
                        <Label for="form-first-name">First Name</Label>
                        <Input
                          type="text"
                          name="form-first-name"
                          id="form-first-name"
                          placeholder={user.name.first}
                          onChange={handleChange}
                          value={modal.value}
                        />

                        <Label for="form-last-name">Last Name</Label>
                        <Input
                          type="text"
                          name="form-last-name"
                          id="form-last-name"
                          placeholder={user.name.last}
                          onChange={handleChange}                          
                        />

                        <Label for="form-phone-number">Phone</Label>
                        <Input
                          type="text"
                          name="form-phone-number"
                          id="form-phone-number"
                          placeholder={user.phone}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <Button style={{backgroundColor: '#577590'}}
                        color="primary"
                        onClick={handleUpdate(/* input field values */)}
                      >
                        Save Changes
                      </Button>
                      <Button style={{backgroundColor: '#9b9c9b'}} onClick={toggleModal}>
                        Cancel
                      </Button>
                    </Form>
                  </ModalBody>
                </Modal>
              </div>
            )}
          </>
        );
      }}
    </UsersContext.Consumer>
  );
};

export default ModalComponent;
