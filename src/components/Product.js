import React from "react"

function Product(props){
    console.log("Product Props",props)
    return(
        <div>
            <h1>{props.data.name}</h1>
            <p>bla</p>
        </div>
    )
}

export default Product