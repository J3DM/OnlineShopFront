import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Login from "./components/Login"
import Navbar from "./components/Navbar"
import axios from "axios"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:{}
    }
    this.submitLogin=this.submitLogin.bind(this)
  }
  
  submitLogin(email,password){
    var data={
        email:email,
        password:password
    }
    axios.post(
        "//localhost:3001/v1/user/login",
        data  
    )
    .then(
        (result)=>{
            this.setState({user:result.data.user})
            console.log(this.state)
        }
    )
    .catch(
        (err)=>console.log(err)
    )  
  }

  render(){
    var LoginModalButton=<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#LoginModal">Login</button>
    return (
      <div className="App">
        <Navbar loginButton={LoginModalButton}/>
        <Login  user={this.state.user} loginMethod={this.submitLogin}/>
      </div>
    )  
  }
}

export default App;
