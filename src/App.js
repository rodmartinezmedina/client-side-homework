import React from 'react';
import './App.css';
import Userslist from './components/UsersList'
import UsersContextProvider from './contexts/UsersContext';
import UsersList from './components/UsersList';


function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <UsersList />
      </UsersContextProvider>   
    </div>
  );
};

export default App;
