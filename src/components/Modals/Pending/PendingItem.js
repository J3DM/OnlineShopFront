import React from "react"

function PendingItem(props){
    // console.log(props)
    return(
        <div className="row">
            <div className="div-6">Id {props.sale._id}</div>
            <div className="div-3">{props.sale.totalPrice}</div>
            <div className="div-3">
                <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        data-toggle="modal" 
                        data-target="#saleModal"
                        aria-label="Close" 
                        onClick={()=>props.setPendingSale(props.sale)}>Show</button>
            </div>
        </div>
    )
}

export default PendingItem