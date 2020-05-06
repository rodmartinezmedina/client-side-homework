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
        const { users, updateUser, getUser } = context;

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
                  <ModalHeader toggleModal={toggleModal}>
                    <Badge color="info">
                      <h3>User's details</h3>
                    </Badge>
                  </ModalHeader>
                  <ModalBody>
                    <Alert color="primary">Edit the selected user</Alert>

                    <Form>
                      <FormGroup>
                        <Label for="form-first-name">First Name</Label>
                        <Input
                          type="text"
                          name="form-first-name"
                          id="form-first-name"
                          placeholder="Update First Name"
                          value={user.name.first}
                        />

                        <Label for="form-last-name">Last Name</Label>
                        <Input
                          type="text"
                          name="form-last-name"
                          id="form-last-name"
                          placeholder="Update Last Name"
                          value={user.name.last}
                        />

                        <Label for="form-phone-number">Phone</Label>
                        <Input
                          type="text"
                          name="form-phone-number"
                          id="form-phone-number"
                          placeholder="Update Phone Number"
                          value={user.phone}
                        />
                      </FormGroup>
                      <Button
                        color="primary"
                        onClick={handleUpdate(/* input field values */)}
                      >
                        Update user on click
                      </Button>{" "}
                      <Button color="secondary" onClick={toggleModal}>
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
