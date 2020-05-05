import React, { createContext, Component } from 'react';
import axios from 'axios';

export const UsersContext = createContext();

class UsersContextProvider extends Component {
  state = {

  }

  componentDidMount = () => {
    this.state.axios
    .get()
    .then(({data}) => {
      this.setState({  })
    })
  }

  

}