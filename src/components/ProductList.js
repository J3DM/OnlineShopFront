import React from"react"

import Product from "./Product";

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
        var productList
        if(this.props.products.products){
            productList=this.props.products.products.map(product=>{
                return <Product key={product._id} data={product} productInfoHandler={this.props.infoHandler} addCartHandler={this.props.cartHandler}/>})
        }else{
            productList=<h1>No products found</h1>
        }
        var categoryList
        categoryList=Array.from(this.props.categories).map(category=><button key={category} className="dropdown-item h6" href="/" onClick={()=>this.props.filter("category",{category})}>{category}</button>)
        return(
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h3>ProductList</h3>
                        </div>
                    </div>
                    <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">                                    
                                    <h4 className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</h4>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {categoryList}
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="name" onChange={this.onChangeHandler}/>
                                        <button className="btn btn-outline-success my-2 mr-sm-2" onClick={()=>this.props.filter("name",this.state.name)}>Search</button>
                                        <button className="btn btn-outline-warning my-2 my-sm-0" onClick={()=>this.props.filter("name","")}>Clear</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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