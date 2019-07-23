import React from "react"


function Info(props){
    //console.log("Product Props",props)
    return(
        <div className="modal fade" id="InfoModal" tabIndex="-1" role="dialog" aria-hidden="true">
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
                    </div>
                    <div className="modal-footer"> 
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h4>{props.product.price} €</h4>                      
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

export default Info