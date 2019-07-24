import React from "react"


class AddCart extends React.Component{
    constructor(){
        super()
        this.state={
            quantity:0
        }
        this.onChangeHandler=this.onChangeHandler.bind(this)
    }
    onChangeHandler(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    render(props){
    //console.log("Product Props",props)
    var quantityInput={class:"",
        name:"quantity",
        type:"number",
        value:this.state.quantity, 
        inputText:"Number of products",
        description:"quantityHelp",
        help:"How many products you want to buy?",
        id:"inputCartQuantity"}
    var CartButton
    if(this.props.userLoggedIn==="true"){
        CartButton=<button 
        type="button"
        className="btn btn-primary " 
        onClick={()=>this.props.addToCart(this.props.product._id,this.state.quantity)} 
        aria-label="Add to Cart"
        data-dismiss="modal" 
        aria-label="Close">Add to Cart
        </button>
    }else{
        CartButton=<button 
        type="button"
        className="btn btn-primary " 
        aria-label="Add to Cart"
        disabled>Add to Cart
        </button>
    }
    return(
        <div className="modal fade" id="CartModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-white">
                        <div className="container">
                            <div>
                                <h3>Product Info</h3>        
                            </div>
                            <div>
                                <h6>Product Id {this.props.product._id}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <h4>{this.props.product.name}</h4>
                        <img src={this.props.product.image} alt={"image of product "+this.props.product._id}/>                    
                        {/* <p>{this.props.product.description}</p> */}
                        <h5>Available {this.props.product.quantity} units</h5>
                        <br/>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor={quantityInput.id}>{quantityInput.inputText}</label>
                            </div>
                            <div className="col-6">
                                <input 
                                    type={quantityInput.type} 
                                    id={quantityInput.id} 
                                    className="form-control" 
                                    name={quantityInput.name}
                                    value={quantityInput.value}
                                    onChange={this.onChangeHandler}
                                    aria-describedby={quantityInput.description} 
                                    placeholder={quantityInput.help}
                                    min={0}
                                    max={this.props.product.quantity}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-6">
                                <h4>Price/unit: {this.props.product.price} €</h4>
                            </div>
                            <div className="col-6">
                                <h4>Total: {this.props.product.price*this.state.quantity} €</h4>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer"> 
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                {CartButton}
                                </div>
                                <div className="col-6">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
}

export default AddCart