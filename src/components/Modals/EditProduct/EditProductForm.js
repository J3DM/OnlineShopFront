import React from "react"
import InputText from "../../elements/InputText"

function EditProductForm(props){
    var nameInput={
        class:"",
        name:"name",
        type:"text",
        value:props.product.name,
        inputText:"Name",
        description:"nameHelp",
        help:"User name",
        id:"editProductNameInput"
    }
    var categoryInput={
        class:"",
        name:"category",
        type:"text",
        value:props.product.category,
        inputText:"Category",
        description:"categoryHelp",
        help:"Category name",
        id:"editProductCategoryInput"
    }
    var priceInput={
        class:"",
        name:"price",
        type:"number",
        value:props.product.price,
        inputText:"Price",
        description:"priceHelp",
        help:"Product price",
        id:"editProductPriceInput"
    }
    var quantityInput={
        class:"",
        name:"quantity",
        type:"number",
        value:props.product.quantity,
        inputText:"Quantity",
        description:"quantityHelp",
        help:"Product quantity",
        id:"editProductQuantityInput"
    }
    var descriptionInput={
        class:"",
        name:"description",
        type:"text",
        value:props.product.description,
        inputText:"Description",
        description:"descriptionHelp",
        help:"Product descripcion",
        id:"editProductDescriptionInput"
    }
    var imageInput={
        class:"",
        name:"image",
        type:"text",
        value:props.product.image,
        inputText:"Image",
        description:"imageHelp",
        help:"Product image url",
        id:"editProductImageInput"
    }

    return(
        <form>
            <InputText input={nameInput} onChange={props.onChange}/>
            <InputText input={categoryInput} onChange={props.onChange}/>
            <InputText input={priceInput} onChange={props.onChange}/>
            <InputText input={quantityInput} onChange={props.onChange}/>
            <InputText input={descriptionInput} onChange={props.onChange}/>
            <InputText input={imageInput} onChange={props.onChange}/>
        </form>
        // <div><h3>New Product Form</h3></div>
    )
}

export default EditProductForm