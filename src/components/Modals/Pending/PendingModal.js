import React from "react"
import PendingItem from "./PendingItem"
import CloseButton from "../../elements/ButtonCloseModal"

class Pending extends React.Component{
    render(){
        // console.log(this.props)
        //console.log(this.props.pending)
        var  pendingItems
        if (this.props.pending[0]){
            pendingItems=this.props.pending.map(
                item=><PendingItem 
                        key={item._id} 
                        sale={item} 
                        setPendingSale={this.props.setPendingSale}/>
            )
        }else{
            pendingItems=<h5>No pending sales</h5>
        }
        return(
            <div className="modal fade" id="PendingModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary text-white">
                            <div className="container">
                                <div>
                                    <h3>Pending Sales</h3>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            {pendingItems}     
                        </div>
                        <div className="modal-footer">
                            <CloseButton/>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
}

export default Pending