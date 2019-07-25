import React from "react"
import CartLine from "./CartLine"
import InputText from "../../elements/InputText"

class AddCart extends React.Component{
    render(props){
    // console.log(this.props)
    var inputCartAddress={
        class:"",
        name:"address",
        type:"text",
        value:this.props.address, 
        inputText:"Address",
        description:"addressHelp",
        help:"Where it should be delivered?",
        id:"inptCartAddress"
    }
    var cartItems
    var purchaseButton
    if (this.props.user.shoppingList[0]){
        cartItems=this.props.user.shoppingList.map(item=><CartLine key={item._id} product={item} deleteItemHandler={this.props.deleteItemHandler}/>)
        purchaseButton=<button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal" 
                    aria-label="Close" 
                    onClick={()=>this.props.purchase()}>Purchase</button>
    }else{
        cartItems=<h3>No items found in the shopping cart</h3>
        purchaseButton=<button
                    type="button"
                    className="btn btn-primary"
                    disabled>Purchase</button>
    }
    return(
        <div className="modal fade" id="ListModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-white">
                        <div className="container">
                            <div>
                                <h3>User Shopping List</h3>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div>
                            <InputText input={inputCartAddress} onChange={this.props.onChange}/>
                        </div>
                        <div>
                            {cartItems}     
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="row">
                            <div className="col-6">
                                {purchaseButton}
                            </div>
                            <div className="col-6">
                                <button 
                                    type="button" 
                                    className="close" 
                                    data-dismiss="modal" 
                                    aria-label="Close">Close</button>
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