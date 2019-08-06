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
import NewProduct from "./components/Modals/NewProduct/NewProductModel"
import RoleModal from "./components/Modals/Roles/RoleModal"
import Alert from "./components/Modals/Alert/AlertBox"
import EditProduct from "./components/Modals/EditProduct/EditProductModal"

const url="http://192.168.0.18"

const NoUser={
  "_id": "",
  "name": "",
  "password": "",
  "email": "",
  "role": "",
  "shoppingList": []
}
const NoSale={
  "_id": "",
  "state": "",
  "user": "",
  "address": "",
  "products": [],
  "totalPrice": 0
}
const NoProduct={
  name:"",
  category:"",
  price:0,
  quantity:0,
  description:"",
  image:""
}

class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:NoUser,
      productInfo:NoProduct,
      products:[],
      userLoggedIn:"false",
      sale:NoSale,
      address:"",
      pendingSales:[],
      newProduct:NoProduct,
      categories:[],
      alerts:[],
      showAll:false
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
    this.onChangeHandlerNewProduct=this.onChangeHandlerNewProduct.bind(this)
    this.createUser=this.createUser.bind(this)
    this.setPendindSale=this.setPendindSale.bind(this)
    this.getPendingSales=this.getPendingSales.bind(this)
    this.postProduct=this.postProduct.bind(this)
    this.filterProducts=this.filterProducts.bind(this)
    this.changeUserRole=this.changeUserRole.bind(this)
    this.removeAlert=this.removeAlert.bind(this)
    this.showAlert=this.showAlert.bind(this)
    this.confirmSale=this.confirmSale.bind(this)
    this.onChangeHandlerEditProduct=this.onChangeHandlerEditProduct.bind(this)
    this.deleteProduct=this.deleteProduct.bind(this)
    this.editProduct=this.editProduct.bind(this)
    this.showAllSwitch=this.showAllSwitch.bind(this)
    this.activateProduct=this.activateProduct.bind(this)
  }

  showAlert(className,title,msg){
    this.setState(prevState=>{
      var alertArray=prevState.alerts
      alertArray.push(
        {
          class:className,
          title:title,
          msg:msg,
          show:true
        }
      )
      return {
        alerts:alertArray
      }
    })
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
        this.showAlert("alert-info","Product added",productName+" added to the shopping cart")
      }
    )
    .catch(
        (err)=>this.showAlert("alert-danger","Error Add product to Cart",productName+" was not add to the shopping cart")
    )
    
  }

  listProducts() {
    if(this.state.showAll){
      axios.get(
        url+":3001/v1/product/listAll",
        {}
      )
      .then(
        (resultArray)=>{
          this.setState({products:resultArray.data})
          //console.log(this.state.products.products.length)
          var categories=new Set()
          this.state.products.products.map(product=>categories.add(product.category))
          this.setState({categories:categories})
        }
      )
      .catch(
          (err)=>this.showAlert("alert-danger","Error listing products","Recover products failed")
      )
    }else{
      axios.get(
          url+":3001/v1/product/list",
          {}
        )
        .then(
          (resultArray)=>{
            this.setState({products:resultArray.data})
            //console.log(this.state.products.products.length)
            var categories=new Set()
            this.state.products.products.map(product=>categories.add(product.category))
            this.setState({categories:categories})
          }
        )
        .catch(
            (err)=>this.showAlert("alert-danger","Error listing products","Recover products failed")
        )
    }
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
          this.setState(prevState=>{
            var alertArray=prevState.alerts
            alertArray.push({class:"alert-success",title:"Logging",msg:"User "+result.data.user.name+" logged in",show:true})
            //console.log(alertArray)
            return {
              user:result.data.user,
              userLoggedIn:"true",
              alerts:alertArray
            }
          })
        }
    )
    .catch(
        (err)=>this.showAlert("alert-danger","Error logging in","User could nor be recovered with the data provided")
    )  
  }

  logout(){

    if(this.state.user.email){
      this.setState(prevState=>{
        var alertArray=prevState.alerts
        alertArray.push(
          {
            class:"alert-warning",
            title:"Logging",
            msg:"User "+prevState.user.name+" logged out",
            show:true
          }
        )
        //console.log(alertArray)
        return {
          user:NoUser,
          userLoggedIn:"true",
          alerts:alertArray
        }
      })

      this.setState({user:NoUser,userLoggedIn:"false",pendingSales:[]})
    }
    //console.log("Logout->",this.state)
  }
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
              this.showAlert("alert-success","Update User data","was successfull")
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
              this.showAlert("alert-warning","Update User data","was un-successfull")
            }
        }
    )
    .catch(
        (err)=>this.showAlert("alert-danger","Error updating the user","failed when updating with the data provided")
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
        this.showAlert("alert-info","Shopping cart item"," was removed successfully")
      }
    )
    .catch(
        (err)=>this.showAlert("alert-danger","Error cart remove","failed to remove an item from the shopping cart")
    )
    
  }
  purchaseHandler(){
    // console.log("purchase")
    var data={
      _id:this.state.user._id,
      address:this.state.address
    }
    axios.post(
      url+":3001/v1/sale?_id="+this.state.user._id,
      data
    ).then(
      (result)=>{
        // console.log(result)
        this.setState({user:result.data.user,
                      sale:result.data.sale[0]})
        this.showAlert("alert-success","Sale order","was successfull created")
      }
    )
    .catch(
        (err)=>this.showAlert("alert-danger","Error creating a sale","Failed to create a sale for the logged user")
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
  onChangeHandlerEditProduct(event){
    const {name, value} = event.target
    //type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value }) 
    this.setState((prevSate)=>{
            var editProduct=prevSate.productInfo
            editProduct[name]=value
            return {product:editProduct}
          }
        )
  }
  onChangeHandlerNewProduct(event){
    const {name, value} = event.target
    //type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value }) 
    this.setState((prevSate)=>{
      var product=prevSate.newProduct
      product[name]=value
      return {newProduct:product}
    }
    )
  }
  onChangeHandler(event){
    const {name, value, type, checked} = event.target
    console.log(name,value,checked)
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    console.log(this.state.showAll)
  }
  confirmSale(value){
    // console.log("Request:",this.state.sale._id,value)
    var data={
      _id:this.state.sale._id,
      state:value
    }
    axios.put(
      url+":3001/v1/sale",
      data
    ).then(
      (result)=>{
        // console.log("BBDD Response:",result.data.sale._id,result.data.sale.state)
        var msg=result.data.sale._id+" was successfully "+result.data.sale.state
        this.setState({sale:NoSale})
        if(result.data.sale.state==="REJECTED"){
          this.showAlert("alert-warning","Sale",msg)
        }else{
          this.showAlert("alert-success","Sale",msg)
        }
      }
    ).catch(
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
          this.showAlert("alert-success","User","was successfull created")
        }
    )
    .catch(
        (err)=>{
          this.setState({user:NoUser,userLoggedIn:"false"})
          this.showAlert("alert-danger","Error creating user","Create user process failed")
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
        //console.log(result.data.userSales)
        this.setState({pendingSales:result.data.userSales})
        this.showAlert("alert-info","Pending Sale"," recovered")
      }
    )
    .catch(
      (err)=>{
        this.setState({pendingSales:[]})
        this.showAlert("alert-danger","Error getting sales from the user","Recover sales from the logged user failed")
      }
    )
  }
  postProduct(){
    var data={
      name:this.state.newProduct.name,
      category:this.state.newProduct.category,
      price:this.state.newProduct.price,
      quantity:this.state.newProduct.quantity,
      description:this.state.newProduct.description,
      image:this.state.newProduct.image
    }
    axios.post(
      url+":3001/v1/product",
      data
    )
    .then(
      (result)=>{
        axios.get(
          url+":3001/v1/product/list")
        .then(
          (resultArray)=>{
            this.setState(prevState=>{
              var alertArray=prevState.alerts
              alertArray.push(
                {
                  class:"alert-success",
                  title:"New Product "+this.state.newProduct.name,
                  msg:"New product added",
                  show:true
                }
              )
              return {
                products:resultArray.data,
                alerts:alertArray,
                newProduct:NoProduct
              }
            })
            //this.setState({products:resultArray.data})
          }
        )
      }
    )
    .catch(
      (err)=>{
        this.showAlert("alert-danger","Error creating a product","Create product process failed")
      }
    )
  }
  filterProducts(type,value){
    if(value["category"]){
      //console.log("Searching by category: ",value["category"])
      axios.get(
        url+":3001/v1/product/category?cat="+value["category"]+"&showAll="+this.state.showAll
      )
      .then(
        (result)=>{
        //  console.log(result)
          this.setState({products:result.data})
        }
      )
      .catch(
        (err)=>console.log(err)
      )
    }else{
      //console.log("Searching by name: ",value)
      axios.get(
        url+":3001/v1/product/name?name="+value+"&showAll="+this.state.showAll
      )
      .then(
        (result)=>{
        //  console.log(result)
          this.setState({products:result.data})
        }
      )
      .catch(
        (err)=>console.log(err)
      )
    }
  }
  changeUserRole(email,role){
    //console.log(email,role)
    var data={
      email:email,
      role:role
    }
    axios.put(
      url+":3001/v1/user/role",
      data
    ).then(
      (result)=>{
        this.setState(prevState=>{
          var alertArray=prevState.alerts
          alertArray.push(
            {
              class:"alert-success",
              title:"Roles",
              msg:"User with email "+email+" his new role is "+role,
              show:true
            }
          )
          return {
            alerts:alertArray
          }
        })
      }
    ).catch(
      (err)=>{
        this.showAlert("alert-danger","Errorchanging role","No user could be updated with the data provided")
      }
    )
  }
  removeAlert(id){
    this.setState({alerts:[]})
  }
  editProduct(){
    //console.log("Edit product")
    var data={
      _id:this.state.productInfo._id,
      name:this.state.productInfo.name,
      category:this.state.productInfo.category,
      price:this.state.productInfo.price,
      quantity:this.state.productInfo.quantity,
      description:this.state.productInfo.description,
      image:this.state.productInfo.image
    }
    axios.put(
      url+":3001/v1/product",
      data
    ).then(
      (result)=>{
        this.listProducts()
        this.showAlert("alert-success","Product Updated","the product "+result.data.product.name+" was updated successfully")
      }
    ).catch(
      (err)=>{
        this.showAlert("alert-danger","Error updating product","No product could be updated with the data provided")
      }
    )
  }
  deleteProduct(){
    // console.log("Delete product")
    axios.delete(
      url+":3001/v1/product?id="+this.state.productInfo._id,
    ).then(
      (result)=>{
        this.listProducts()
        this.showAlert("alert-warning","Product Deleted","the product "+this.state.productInfo._id+" was successfully "+result.data.product.state)
      }
    ).catch(
      (err)=>{
        this.showAlert("alert-danger","Error deleting product","No product could be deleted with the id provided")
      }
    )
  }
  showAllSwitch(){
    this.setState(prevState=>{
      return {showAll:!prevState.showAll}
    })
    this.listProducts()
  }
  activateProduct(){
    axios.put(
      url+":3001/v1/product/activate?id="+this.state.productInfo._id,
    ).then(
      (result)=>{
        this.listProducts()
        this.showAlert("alert-warning","Product Deleted","the product "+this.state.productInfo._id+" was successfully "+result.data.product.state)
      }
    ).catch(
      (err)=>{
        this.showAlert("alert-danger","Error deleting product","No product could be deleted with the id provided")
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
          setPendingSale={this.setPendindSale}
          showAll={this.state.showAll}
          onChange={this.showAllSwitch}/>
        <Alert alerts={this.state.alerts} onClick={this.removeAlert}/>
        <div className="container">
          <ProductList 
            products={this.state.products} 
            infoHandler={this.infoHandler} 
            cartHandler={this.cartHandler}
            categories={this.state.categories}
            filter={this.filterProducts}
            list={this.listProducts}
            onChange={this.onChangeHandler}
            showAll={this.state.showAll}
            user={this.state.user}/>
        </div>
       
        {/* Modals */}
        <Login 
          userLoggedIn={this.state.userLoggedIn} 
          user={this.state.user} 
          loginMethod={this.submitLogin}/>
        <Info 
          user={this.state.user}
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
        <NewProduct newProduct={this.state.newProduct}
          onChange={this.onChangeHandlerNewProduct}
          postNewProduct={this.postProduct}/>
        <RoleModal updateRole={this.changeUserRole}/>
        <EditProduct product={this.state.productInfo} 
          onChange={this.onChangeHandlerEditProduct}
          editProduct={this.editProduct}
          deleteProduct={this.deleteProduct}
          activateProduct={this.activateProduct}/>

      </div>
    )  
  }
}

export default App;
