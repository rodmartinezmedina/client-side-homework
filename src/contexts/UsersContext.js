import React, { createContext, Component } from "react";

export const UsersContext = createContext();

class UsersContextProvider extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then(res => res.json())
      .then(data => {
        this.setState({ ...this.state, users: data.results });
      })
      .catch(console.log);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getUser = id => {
    let user = this.state.users.filter(oneUser => {
      return oneUser.login.uuid === id;
    });

    return user[0];
  };

  deleteUser = id => {
    let updatedUsers = this.state.users.filter(oneUser => {
      return oneUser.login.uuid !== id;
    });
    console.log(`user ${id} was deleted`);
    // console.log(`Updated users array`, updatedUsers);

    this.setState({ users: updatedUsers });
  };

  updateUser = (userData) => {
    // let user = this.state.users.filter(oneUser => {
    //   return oneUser.login.uuid === userData.login.uuid;
    // });
    // ** delete user (userData.login.uuid)** //
    this.deleteUser(userData.login.uuid);
    this.setState({
      users: [...this.state.users, userData]
    });
  };

  render() {
    return (
      <UsersContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          updateUser: this.updateUser,
          deleteUser: this.deleteUser,
          getUser: this.getUser
        }}
      >
        {this.props.children}
      </UsersContext.Provider>
    );
  }
}

export default UsersContextProvider;
