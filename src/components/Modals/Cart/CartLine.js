import React from "react"

function CartLine(props){   
    return (
        <div className="row">
            <div  className="col-6">
                <p>{props.product.name}</p>
            </div>
            <div className="col-3">
                <h5>{props.product.quantity}</h5>
            </div>
            <div className="col-3">
                <button 
                className="btn btn-warning" 
                onClick={()=>{props.deleteItemHandler(props.product._id)}}>remove</button>
            </div>
        </div>
    )
}

export default CartLine