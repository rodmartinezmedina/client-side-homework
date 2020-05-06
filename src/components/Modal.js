import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Alert, Badge, Form, FormGroup, Label, Input } from "reactstrap";
import { UsersContext } from "../contexts/UsersContext";

const ModalComponent = props => {
  const { className, idUser } = props;
  const usersContext = useContext(UsersContext);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const { users, updateUser, getUser } = usersContext;

  const user = getUser(idUser);
  const [firstName, setFirstName] = useState(user.name.first);
  const [lastName, setLastName] = useState(user.name.last);
  const [phoneNum, setPhoneNum] = useState(user.phone);


  const handleSubmit = e => {
    e.preventDefault();
    const newUserData = {
      ...user,
      name: {
        ...user.name,
        first: firstName,
        last: lastName
      },
      phone: phoneNum
    };
    console.log(newUserData);
    setModal(!modal)
    updateUser(newUserData);
  };
  return (
    <>
      {user && (
        <div>
          <Button color="primary" onClick={toggleModal}>
            Edit
          </Button>
          <Modal isOpen={modal} toggleModal={toggleModal} className={className}>
            <ModalHeader toggleModal={toggleModal}>
              <Badge color="info">
                <h3>User's details</h3>
              </Badge>
            </ModalHeader>
            <ModalBody>
              <Alert color="primary">Edit the selected user</Alert>

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="form-first-name">First Name</Label>
                  <Input
                    type="text"
                    name="form-first-name"
                    id="form-first-name"
                    placeholder="Update First Name"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                  />

                  <Label for="form-last-name">Last Name</Label>
                  <Input
                    type="text"
                    name="form-last-name"
                    id="form-last-name"
                    placeholder="Update Last Name"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                  />

                  <Label for="form-phone-number">Email</Label>
                  <Input
                    type="text"
                    name="form-phone-number"
                    id="form-phone-number"
                    placeholder="Update Phone Number"
                    onChange={e => setPhoneNum(e.target.value)}
                    value={phoneNum}
                  />
                </FormGroup>
                <Button color="primary" type="submit">
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
};

export default ModalComponent;
