import React from"react"

import Product from "./Product";

class ProductList extends React.Component{
    constructor(){
        super()
        this.state={
            products:[]
        }
    }

    render(){

        var productList
        if(this.props.products.products){
            productList=this.props.products.products.map(product=>{
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