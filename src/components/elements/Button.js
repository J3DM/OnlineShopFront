import React from "react"

function Button(props){
    return(
        <button 
            type={props.button.type} 
            className={"btn "+props.button.class}
            onClick={()=>props.onClick()}
        >
        {props.button.text}
        </button>
    )
}

export default Button