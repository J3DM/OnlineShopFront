import React from 'react';
//import logo from './logo.svg';
import './App.css';

import ProductList from "./components/ProductList"
import Login from "./components/Login"
import Info from "./components/Info"
import AddCart from "./components/AddCart"
import Navbar from "./components/Navbar"
import axios from "axios"
import UserInfo from "./components/UserInfo"

const NoUser={
                "_id": "",
                "name": "",
                "password": "",
                "email": "",
                "role": "",
                "shoppingList": []
              }
class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:NoUser,
      productInfo:{},
      products:[],
      userLoggedIn:"false"
    }
    this.submitLogin=this.submitLogin.bind(this)
    this.logout=this.logout.bind(this)   
    this.cartHandler=this.cartHandler.bind(this)
    this.infoHandler=this.infoHandler.bind(this)
    this.addToCart=this.addToCart.bind(this)
    this.listProducts=this.listProducts.bind(this)
    // this.changeUserParameter=this.changeUserParameter.bind(this)
    this.changeUserEmail=this.changeUserEmail.bind(this)
    this.changeUserName=this.changeUserName.bind(this)
    this.editUser=this.editUser.bind(this)
  }

  componentDidMount() {
    this.listProducts()
  }

  cartHandler(data){
    //console.log(data)
    this.setState({productInfo:data})
  }

  infoHandler(data){
    //console.log(data)
    this.setState({productInfo:data})
  }

  addToCart(productId,quantity){  
    console.log("Send order to add item to cart")
    console.log(productId," - ",quantity)
    var data={
      product:productId,
      quantity:quantity,
      action:"ADD",
      _id:this.state.user._id
    }
    axios.put(
      "http://192.168.1.142:3001/v1/user/product",
      data
    ).then(
      (result)=>{
        console.log(result)
        this.setState({user:result.data.user})
      }
    )
    .catch(
        (err)=>console.log(err)
    )
    
  }

  listProducts() {
    axios.get(
        "http://192.168.1.142:3001/v1/product/list",
        {}
      )
      .then(
        (resultArray)=>{
          this.setState({products:resultArray.data})
          //console.log(this.state.products.products.length)
        }
      )
      .catch(
          (err)=>console.log(err)
      )
      this.forceUpdate()
  }
  
  submitLogin(email,password){
    var data={
        email:email,
        password:password
    }
    axios.post(
        "http://192.168.1.142:3001/v1/user/login",
        data  
    )
    .then(
        (result)=>{
            this.setState(
              {
                user:result.data.user,
                userLoggedIn:"true"
              }
            )
      //      console.log("Login->",this.state)
        }
    )
    .catch(
        (err)=>console.log(err)
    )  
  }

  logout(){
    var newDocument={}
    if(this.state.user.email){
      this.setState({user:newDocument,userLoggedIn:"false"})
    }
    //console.log("Logout->",this.state)
  }

  // changeUserParameter(event){
  //   const {name, value, type, checked} = event.target
  //   console.log(event.target)
  //   this.setState((prevSate)=>{
  //       var newUser=prevSate.user
  //       newUser.name=event.target.value
  //       return {user:newUser}
  //     }
  //   )
  // }
  changeUserName(event){
    const {value} = event.target
    // console.log("New value for name->",value)
    this.setState((prevSate)=>{
      // console.log(prevSate)
      var newUser=prevSate.user
      // console.log(newUser)
      newUser.name=value
      return {user:newUser}
    }
  )
  }
  changeUserEmail(event){
    const {value} = event.target
    this.setState((prevSate)=>{
      // console.log(prevSate)
      var newUser=prevSate.user
      // console.log(newUser)
      newUser.email=value
      return {user:newUser}
    }
    )
  }

  editUser(){
    var data=this.state.user
    axios.put(
        "http://192.168.1.142:3001/v1/user",
        data  
    )
    .then(
        (result)=>{
            if(result.data.user){
              this.setState(
                {
                  user:result.data.user,
                  userLoggedIn:"true"
                }
              )
            }else{
              console.log("Error Updating the user")
            }
        }
    )
    .catch(
        (err)=>console.log(err)
    )
  }

  render(){
    var LoginModalButton=<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#LoginModal">Login</button>
    var LogoutButton=<button type="button" className="btn btn-warning" onClick={()=>this.logout()}>Logout</button>
    return (
      <div className="App">
        <Navbar userLoggedIn={this.state.userLoggedIn} user={this.state.user} loginButton={LoginModalButton} logoutButton={LogoutButton}/>
        <div className="container">
          <ProductList products={this.state.products} infoHandler={this.infoHandler} cartHandler={this.cartHandler}/>
        </div>
        {/* Modals */}
        <Login userLoggedIn={this.state.userLoggedIn} user={this.state.user} loginMethod={this.submitLogin}/>
        <Info product={this.state.productInfo}/>
        <AddCart userLoggedIn={this.state.userLoggedIn} user={this.state.user} product={this.state.productInfo} addToCart={this.addToCart}/>
        <UserInfo 
          user={this.state.user} 
          onChangeName={this.changeUserName} 
          onChangeEmail={this.changeUserEmail}
          editUser={this.editUser}/>
      </div>
    )  
  }
}

export default App;
