import React, { Component } from "react";
import { UsersContext } from "../contexts/UsersContext";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <h1 className='app-hero'>The magic list of never-aging people</h1>   
      </div>
    )
  }
};