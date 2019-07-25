import React from "react"
import SaleItem from "./SaleItem"

class AddCart extends React.Component{
    render(props){
    //console.log(this.props.user.shoppingList)
    console.log(this.props)
    var saleItems=this.props.sale.shoppingList.map(item=><SaleItem key={item._id} product={item}/>)
    return(
        <div className="modal fade" id="saleModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-white">
                        <div className="container">
                            <div>
                                <h3>Sale</h3>
                                <h5>{this.props.sale._id}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        {saleItems}     
                    </div>
                    <div>
                        <h3>Total Price: {this.props.sale.totalPrice}</h3>
                    </div>
                    <div className="modal-footer">
                        <div className="row">
                            <div className="col-6">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal" 
                                    aria-label="Close" 
                                    onClick={()=>this.props.confirmSale()}>Confirm</button>
                            </div>
                            <div className="col-6">
                                <button 
                                    type="button" 
                                    className="close" 
                                    data-dismiss="modal" 
                                    aria-label="Close"
                                    onClick={()=>this.props.cancelSale()}>Cancel</button>
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