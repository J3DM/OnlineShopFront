import React from 'react';
//import logo from './logo.svg';
import './App.css';

import ProductList from "./components/ProductList"
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
    this.logout=this.logout.bind(this)   
  }
  
  componentDidMount() {
   
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
            console.log("Login->",this.state)
        }
    )
    .catch(
        (err)=>console.log(err)
    )  
  }

  logout(){
    var newDocument={}
    if(this.state.user.email){
      this.setState({user:newDocument})
    }
    console.log("Logout->",this.state)
  }

  render(){
    var LoginModalButton=<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#LoginModal">Login</button>
    var LogoutButton=<button type="button" className="btn btn-warning" onClick={()=>this.logout()}>Logout</button>
    return (
      <div className="App">
        <Navbar user={this.state.user} loginButton={LoginModalButton} logoutButton={LogoutButton}/>

        <ProductList />
        {/* LoginModal */}
        <Login  user={this.state.user} loginMethod={this.submitLogin}/>
      </div>
    )  
  }
}

export default App;
