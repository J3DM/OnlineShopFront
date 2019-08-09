import React from"react"

import Product from "./Product";
import Pagination from "./ProductList/Pagination"

class ProductList extends React.Component{
    constructor(){
        super()
        this.state={
            //products:[]
            name:""
        }
        this.onChangeHandler=this.onChangeHandler.bind(this)
    }
    onChangeHandler(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    render(){
        //console.log(this.props)
        var showAllProducts=""
        if(this.props.user.role==="ADMIN" ||this.props.user.role==="MANAGER" ){
            showAllProducts=<div className="form in-line custom-control custom-switch">
                <input 
                    type="checkbox" 
                    className="custom-control-input" 
                    id="customSwitch1" 
                    checked={this.props.showAll} name="showAll"
                    onChange={this.props.onChange}/>
                <label className="custom-control-label" htmlFor="customSwitch1">Show removed</label>
            </div>
        }
        var productList
        if(this.props.products[0]){
            productList=this.props.products.map(product=>{
                return <Product 
                    key={product._id} 
                    user={this.props.user} 
                    data={product} 
                    productInfoHandler={this.props.infoHandler} 
                    addCartHandler={this.props.cartHandler}/>
            })
        }else{
            productList=<h1>No products found or horku backend waking up</h1>
        }
        var PageSelector=""
        if(this.props.pages>1){
            PageSelector=<Pagination pages={this.props.pages} giveProductsPage={this.props.giveProductsPage}/>
        }
        var categoryList
        categoryList=Array.from(this.props.categories).map(category=><button key={category} className="dropdown-item h6" href="/" onClick={()=>this.props.filter("category",{category})}>{category}</button>)
        return(
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="row">
                            <div className="col-10">
                                <h2>ProductList</h2>
                            </div>
                            <div className="col-2">
                                <img className="rounded float-right" src="https://png.pngtree.com/svg/20150407/4ad49cd89d.svg" width="40"alt=""/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                                    {showAllProducts}
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 col-xl-3 mt-2">
                                    <h4 className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</h4>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {categoryList}
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 col-xl-3 mt-2">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" name={this.props.productName} onChange={this.props.onChange}/>
                                </div>
                                <div className="col-6 col-md-3 col-lg-3 col-xl-3 mt-2">
                                    <button className="btn btn-outline-success" onClick={()=>this.props.filter("name",this.props.productName)}>Search</button>
                                </div>
                                <div className="col-6 col-md-3 col-lg-3 col-xl-3 mt-2">
                                    <button className="btn btn-outline-warning" onClick={()=>this.props.list()}>Clear</button>
                                </div>

                                {/* <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                                    {showAllProducts}
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                                    <h4 className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</h4>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {categoryList}
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                                    <div className="form-inline my-2">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name={this.props.productName} onChange={this.props.onChange}/>
                                        <button className="btn btn-outline-success my-2 mr-sm-2" onClick={()=>this.props.filter("name",this.props.productName)}>Search</button>
                                        <button className="btn btn-outline-warning my-2 my-sm-0" onClick={()=>this.props.list()}>Clear</button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {productList}
                    </div>
                    <div>
                        {
                        PageSelector
                        }
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ProductList