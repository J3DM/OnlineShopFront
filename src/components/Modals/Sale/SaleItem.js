import React from "react"

function SaleLine(props){   
    return (
        <div className="row">
            <div  className="col-6">
                <div>
                    <p>{props.product._id}</p>
                </div>
                <div>
                    <p>{props.product.name}</p>
                </div>
            </div>
            <div className="col-3">
                <h5>{props.product.quantity}</h5>
            </div>
            <div className="col-3">
                <h5>{props.product.price}</h5>
            </div>
            <div className="col-3">
                <h5>{props.product.price*props.product.quantity}</h5>
            </div>
        </div>
    )
}

export default SaleLine