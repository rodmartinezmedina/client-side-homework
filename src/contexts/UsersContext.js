import React, { createContext, Component } from 'react';
import axios from 'axios';

export const UsersContext = createContext();

class UsersContextProvider extends Component {
  state = {
    users: []
  }

  componentDidMount() {

    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then((data) => {
      this.setState({ ...this.state, users: data.results })
    })
    .catch(console.log)
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  
  deleteUser = (id) => {
    let updatedUsers = this.state.users.filter(oneUser => {
      return oneUser.login.uuid !== id
    });
    console.log(`user ${id} was deleted`);
    console.log(`Updated users array`, updatedUsers);

    this.setState({users: updatedUsers })
  }


  //   updateUser = (id) => {
  //   const { name, description } = this.state;
  //   this.state.axios
  //     .put(`/users/${id}`, {name, description})
  //     .then(({data}) => {
  //       let user = this.state.users.filter(oneUser => {
  //         return id === oneUser._id
  //       })
  //       user[0].name = name;
  //       user[0].description = description;
  //       this.setState({name: "", description: "", users: [...this.state.users, user]});
  //     })
  //     .catch(err => console.log(err));
  // }


  render () {
    return (
      <UsersContext.Provider value={{
        ...this.state,
        handleChange: this.handleChange,
        updateUser: this.updateUser,
        deleteUser: this.deleteUser
      }}>
        {this.props.children}
      </UsersContext.Provider>
      );
  };
};

export default UsersContextProvider;