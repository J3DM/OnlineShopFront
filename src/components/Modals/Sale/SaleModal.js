import React from "react"
import SaleItem from "./SaleItem"

class AddCart extends React.Component{
    render(props){
        // console.log(this.props)
        // console.log(this.props.sale)
        if (this.props.sale.products[0]){
            var saleItems=this.props.sale.products.map(item=><SaleItem key={item._id} product={item}/>)
        }else{
            var saleItems=<p></p>
        }
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
                                        onClick={()=>this.props.confirmSale("ACCEPTED")}>Confirm</button>
                                </div>
                                <div className="col-6">
                                    <button 
                                        type="button" 
                                        className="btn btn-warning" 
                                        data-dismiss="modal"
                                        onClick={()=>this.props.confirmSale("REJECTED")}>Cancel</button>
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