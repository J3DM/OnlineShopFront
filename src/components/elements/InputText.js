import React from "react"

function InputText(props){
    return(
        <div className="form-group">
            <label htmlFor={props.input.id}>{props.input.inputText}</label>
            <input 
                type={props.input.type} 
                id={props.input.id} 
                className="form-control" 
                name={props.input.name}
                value={props.input.value}
                onChange={props.onChange}
                aria-describedby={props.input.description} 
                placeholder={props.input.help}/>
        </div>
    )
}

export default InputText
