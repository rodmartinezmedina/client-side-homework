import React, { createContext, Component } from 'react';
import axios from 'axios';

export const UsersContext = createContext();

class UsersContextProvider extends Component {
  state = {
    users: [],  
  }

  componentDidMount() {

    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  }


  render () {
    return (
      <UsersContext.Provider value={this.state}
        // handleChange: this.handleChange,
        // updateUser: this.updateUser,
        // deleteUser: this.deleteUser
      >
        {this.props.children}
      </UsersContext.Provider>
      );
  };
};

const Consumer=UsersContext.Consumer
export default UsersContextProvider;




  
  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };


  // updateUser = (id) => {
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


  // deleteUser = (id) => {
  //   this.state.axios
  //     .delete(`/users/${id}`, {})
  //     .then(({data}) => {
  //       let users = this.state.users.filter(oneUser => {
  //         return oneUser._id !== id
  //       })
  //       this.setState({name: "", description: "", users})
  //     })
  //     .catch(err => console.log(err))
  // };    