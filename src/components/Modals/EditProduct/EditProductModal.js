import React from "react"
import EditProductForm from "./EditProductForm"
import CloseButton from "../../elements/ButtonCloseModal"

class EditProduct extends React.Component{
    render(){
        //console.log(this.props)
        var newProductForm=<EditProductForm product={this.props.product} onChange={this.props.onChange}/>
        return(
            <div className="modal fade" id="EditProductModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary text-white">
                            <div className="container">
                                <div>
                                    <h3>New Product</h3>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            {newProductForm}     
                        </div>
                        <div className="modal-footer">
                        <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal" 
                                onClick={()=>this.props.editProduct()}>Edit</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal" 
                                onClick={()=>this.props.deleteProduct()}>Delete</button>
                            {/* <Button button={button} onClick={this.props.postNewProduct}/> */}
                            <CloseButton/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProduct