import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Login from "./components/Login"
import Navbar from "./components/Navbar"

function App() {
  var LoginModalButton=<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#LoginModal">Login</button>
  return (
    <div className="App">
      <Navbar loginButton={LoginModalButton}/>
      <Login />
    </div>
  );
}

export default App;
