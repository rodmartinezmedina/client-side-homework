import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Userslist from './components/UsersList'
import UsersContextProvider from './contexts/UsersContext';


// import AuthContextProvider from './contexts/AuthContext';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <UsersContextProvider>
        <UsersList />
      </UsersContextProvider>   
    </div>
  );
};

export default App;
