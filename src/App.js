import React from 'react';
//import logo from './logo.svg';
import './App.css';

import ProductList from "./components/ProductList"
import Login from "./components/Login"
import Info from "./components/Info"
import AddCart from "./components/AddCart"
import Navbar from "./components/Navbar"
import axios from "axios"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:{},
      productInfo:{},
      products:[]
    }
    this.submitLogin=this.submitLogin.bind(this)
    this.logout=this.logout.bind(this)   
    this.cartHandler=this.cartHandler.bind(this)
    this.infoHandler=this.infoHandler.bind(this)
    this.addToCart=this.addToCart.bind(this)
    this.listProducts=this.listProducts.bind(this)
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
      "//localhost:3001/v1/user/product",
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
        "//localhost:3001/v1/product/list",
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
        "//localhost:3001/v1/user/login",
        data  
    )
    .then(
        (result)=>{
            this.setState({user:result.data.user})
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
      this.setState({user:newDocument})
    }
    //console.log("Logout->",this.state)
  }

  render(){
    var LoginModalButton=<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#LoginModal">Login</button>
    var LogoutButton=<button type="button" className="btn btn-warning" onClick={()=>this.logout()}>Logout</button>
    return (
      <div className="App">
        <Navbar user={this.state.user} loginButton={LoginModalButton} logoutButton={LogoutButton}/>
        <div className="container">
          <ProductList products={this.state.products} infoHandler={this.infoHandler} cartHandler={this.cartHandler}/>
        </div>
        {/* Modals */}
        <Login  user={this.state.user} loginMethod={this.submitLogin}/>
        <Info product={this.state.productInfo}/>
        <AddCart user={this.state.user} product={this.state.productInfo} addToCart={this.addToCart}/>
      </div>
    )  
  }
}

export default App;
