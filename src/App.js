import React from 'react';
//import logo from './logo.svg';
import './App.css';

import ProductList from "./components/ProductList"
import Login from "./components/Login"
import Info from "./components/Info"
import AddCart from "./components/AddCart"
import CartModal from "./components/Modals/Cart/CartModal"
import Navbar from "./components/Navbar"
import axios from "axios"
import UserInfo from "./components/UserInfo"
import SaleModal from "./components/Modals/Sale/SaleModal"
import CreateUser from "./components/Modals/User/UserModal"
import Pending from "./components/Modals/Pending/PendingModal"

const url="http://localhost"

const NoUser={
                "_id": "",
                "name": "",
                "password": "",
                "email": "",
                "role": "",
                "shoppingList": [],
                
              }
const NoSale={
    "_id": "",
    "state": "",
    "user": "",
    "address": "",
    "products": [],
    "totalPrice": 0,

}
class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:NoUser,
      productInfo:{},
      products:[],
      userLoggedIn:"false",
      sale:NoSale,
      address:"",
      pendingSales:[]
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
    this.deleteItemHandler=this.deleteItemHandler.bind(this)
    this.purchaseHandler=this.purchaseHandler.bind(this)
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.onChangeHandlerUser=this.onChangeHandlerUser.bind(this)
    this.createUser=this.createUser.bind(this)
    this.setPendindSale=this.setPendindSale.bind(this)
    this.getPendingSales=this.getPendingSales.bind(this)
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

  addToCart(productName,productId,quantity){  
    // console.log("Send order to add item to cart")
    // console.log(productId," - ",quantity)
    var data={
      product:productId,
      quantity:quantity,
      action:"ADD",
      _id:this.state.user._id,
      name:productName
    }
    axios.put(
      url+":3001/v1/user/product",
      data
    ).then(
      (result)=>{
        // console.log(result)
        this.setState({user:result.data.user})
      }
    )
    .catch(
        (err)=>console.log(err)
    )
    
  }

  listProducts() {
    axios.get(
        url+":3001/v1/product/list",
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
        url+":3001/v1/user/login",
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
        (err)=>{console.log(err)}
    )  
  }

  logout(){

    if(this.state.user.email){
      this.setState({user:NoUser,userLoggedIn:"false",pendingSales:[]})
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
        url+":3001/v1/user",
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
              axios.get(url+":3001/v1/user?_id="+this.state.user._id)
              .then((result)=>{
                this.setState(
                  {
                    user:result.data.user,
                    userLoggedIn:"true"
                  }
                )
              })
            }
        }
    )
    .catch(
        (err)=>console.log(err)
    )
  }
  deleteItemHandler(productId){
    var data={
      product:productId,
      action:"REMOVE",
      _id:this.state.user._id
    }
    axios.put(
      url+":3001/v1/user/product",
      data
    ).then(
      (result)=>{
        //console.log(result)
        this.setState({user:result.data.user})
      }
    )
    .catch(
        (err)=>console.log(err)
    )
    
  }
  purchaseHandler(){
    // console.log("purchase")
    var data={
      address:this.state.address
    }
    axios.post(
      url+":3001/v1/sale?_id="+this.state.user._id,
      data
    ).then(
      (result)=>{
        console.log(result)
        this.setState({user:result.data.user,
                      sale:result.data.sale[0]})
      }
    )
    .catch(
        (err)=>console.log(err)
    )

  
  }
  onChangeHandlerUser(event){
    const {name, value} = event.target
    //type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value }) 
    this.setState((prevSate)=>{
            var newUser=prevSate.user
            newUser[name]=value
            return {user:newUser}
          }
        )
  }
  onChangeHandler(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value }) 
  }
  confirmSale(value){
    var data={
      _id:this.sale._id,
      state:value
    }
    axios.put(
      url+":3001/v1/sale",
      data  
    )
    .then(
        (result)=>{
          //console.log(result.data)
          this.setState((prevSate)=>{
            var newState=prevSate
            newState.sale=NoSale
            return newState})
          //console.log(this.setState)
        }
    )
    .catch(
        (err)=>console.log(err)
    )
    //this.forceUpdate()
    //Update product list
  }
  createUser(){
    //console.log(this.state)
    var data={
        "name": this.state.user.name,
        "password": this.state.user.password,
        "email": this.state.user.email,
        "role": "CUSTOMER"      
    }
    axios.post(
      url+":3001/v1/user",
      data  
    )
    .then(
        (result)=>{
          // console.log(result.data.user)
          // console.log(this.state.user)
          this.setState({user:NoUser,userLoggedIn:"false"})
        }
    )
    .catch(
        (err)=>{
          this.setState({user:NoUser,userLoggedIn:"false"})
        }
    )
    this.forceUpdate()
  }
  setPendindSale(sale){
    this.setState({sale:sale})
  }
  getPendingSales(){
    //console.log("getting pending sales")
    axios.get(
      url+":3001/v1/sale/user?user="+this.state.user._id
      //TODO ADD SOMETHING
    )
    .then(
      (result)=>{
        console.log(result.data.userSales)
        this.setState({pendingSales:result.data.userSales})
      }
    )
    .catch(
      (err)=>{
        this.setState({pendingSales:[]})
      }
    )
  }
  

  render(){
    var LoginModalButton=<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#LoginModal">Login</button>
    var LogoutButton=<button type="button" className="btn btn-warning" onClick={()=>this.logout()}>Logout</button>
    return (
      <div className="App">
        <Navbar
          userLoggedIn={this.state.userLoggedIn}
          user={this.state.user}
          loginButton={LoginModalButton} 
          logoutButton={LogoutButton}
          getPendingSale={this.getPendingSales}
          setPendingSale={this.setPendindSale}/>
        <div className="container">
          <ProductList 
            products={this.state.products} 
            infoHandler={this.infoHandler} 
            cartHandler={this.cartHandler}/>
        </div>
       
        {/* Modals */}
        <Login 
          userLoggedIn={this.state.userLoggedIn} 
          user={this.state.user} 
          loginMethod={this.submitLogin}/>
        <Info 
          product={this.state.productInfo}/>
        <AddCart 
          userLoggedIn={this.state.userLoggedIn} 
          user={this.state.user} 
          product={this.state.productInfo} 
          addToCart={this.addToCart}/>
        <UserInfo 
          user={this.state.user} 
          onChangeName={this.changeUserName} 
          onChangeEmail={this.changeUserEmail}
          editUser={this.editUser}/>
        <CartModal user={this.state.user}
          deleteItemHandler={this.deleteItemHandler}
          purchase={this.purchaseHandler}
          onChange={this.onChangeHandler}
          address={this.state.address}/>
        <SaleModal sale={this.state.sale}
          confirmSale={this.confirmSale}
          cancelSale={this.cancelSale}/>
        <CreateUser user={this.state.user}
          onChange={this.onChangeHandlerUser}
          createUser={this.createUser}/>
        <Pending pending={this.state.pendingSales}
          setPendingSale={this.setPendindSale}/>
      </div>
    )  
  }
}

export default App;
