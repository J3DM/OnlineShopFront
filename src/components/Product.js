import React from "react"

function Product(props){
    //console.log("Product Props",props)
    var buttonCart
    if(props.data.quantity>0){
        buttonCart=<button 
        type="button" 
        className="btn btn-primary"
        data-toggle="modal" 
        data-target="#CartModal"
        onClick={()=>props.addCartHandler(props.data)}>Add to Cart</button>
    }else{
        buttonCart=<button 
        type="button" 
        className="btn btn-primary"
        data-toggle="modal" 
        data-target="#CartModal"
        disabled>Add to Cart</button>
    }
    return(
        <div className={"card col-12 col-sm-6 col-lg-4 mb-2"+(props.data.quantity>0?"":" border-danger text-danger")+(props.data.state==="DELETED"?" bg-danger text-white":"")}>
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
                        {buttonCart}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product