import React from "react"


function Info(props){
    //console.log("Product Props",props)
    var editProductButton
    if(props.user.role==="ADMIN" ||props.user.role==="MANAGER"){
        editProductButton=<button type="button" className="btn btn-warning" data-dismiss="modal" data-toggle="modal" data-target="#EditProductModal" aria-label="Close">Edit</button>
    }else{
        editProductButton=""
    }
    return(
        <div className="modal fade" id="InfoModal" tabIndex="-2" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-white">
                        <div className="container">
                            <div>
                                <h3>Product Info</h3>        
                            </div>
                            <div>
                                <h6>Product Id {props.product._id}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <h4>{props.product.name}</h4>
                        <img src={props.product.image} alt={"image of product "+props.product._id}/>                    
                        <p>{props.product.description}</p>
                        <h5>Available {props.product.quantity} units</h5>
                    </div>
                    <div className="modal-footer"> 
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h4>Price: {props.product.price} €</h4>                      
                                </div>
                                <div className="col-6">
                                    {editProductButton}
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

export default Info