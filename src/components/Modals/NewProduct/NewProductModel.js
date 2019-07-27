import React from "react"
import ProductForm from "./NewProductForm"
import CloseButton from "../../elements/ButtonCloseModal"

class NewProduct extends React.Component{
    render(){
        var newProductForm=<ProductForm/>
        return(
            <div className="modal fade" id="NewProductModal" tabIndex="-1" role="dialog" aria-hidden="true">
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
                            <CloseButton/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewProduct