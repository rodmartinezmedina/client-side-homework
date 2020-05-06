import React from 'react';
import './App.css';
import Userslist from './components/UsersList'
import UsersContextProvider from './contexts/UsersContext';
import UsersList from './components/UsersList';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
      <Hero></Hero>
        <UsersList />
      </UsersContextProvider>   
    </div>
  );
};

export default App;
