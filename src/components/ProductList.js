import React from"react"
import axios from "axios"

import Product from "./Product";

class ProductList extends React.Component{
    constructor(){
        super()
        this.state={
            products:[]
        }
    }

    componentDidMount() {
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

    render(){

        var productList
        if(this.state.products.products){
            productList=this.state.products.products.map(product=>{
                return <Product key={product._id} data={product} productInfoHandler={this.props.infoHandler} addCartHandler={this.props.cartHandler}/>})
        }else{
            productList=<h1>No products found</h1>
        }

        return(
            <div>
                <h1>ProductList</h1>
                <div className="container-fluid">
                    <div className="row">
                        {productList}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList