import React from "react"
import ProductForm from "./NewProductForm"
import CloseButton from "../../elements/ButtonCloseModal"

class NewProduct extends React.Component{
    render(){
        //console.log(this.props)
        var newProductForm=<ProductForm product={this.props.newProduct} onChange={this.props.onChange}/>
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
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal" 
                                onClick={()=>this.props.postNewProduct()}>Create</button>
                            {/* <Button button={button} onClick={this.props.postNewProduct}/> */}
                            <CloseButton/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewProduct