import React from "react"

function Product(props){
    //console.log("Product Props",props)
    return(
        <div className="card col-4">
            <img src={props.data.image} className="card-img-top" alt={"image of product "+props.data._id}/>
            <div className="card-body">
                <h4 className="card-title">{props.data.name}</h4>
                <button 
                    type="button"
                    className="btn btn-outline-info"
                    data-toggle="modal" 
                    data-target="#InfoModal"
                    onClick={()=>props.productInfoHandler(props.data)}>More info</button>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-6">
                        <span className="align-middle">
                            <h4>{props.data.price} €</h4>
                        </span>
                    </div>
                    <div className="col-6">
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={()=>props.addCartHandler(props.data._id)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product