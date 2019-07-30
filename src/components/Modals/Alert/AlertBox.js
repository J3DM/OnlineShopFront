import React from "react"

function Alert(props){
    console.log(props)
    if(props.alert.show){
        return(
            <div className={"alert "+props.alert.class+" alert-dismissible fade show"} role="alert">
                <strong>{props.alert.title}</strong> {props.alert.msg}.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }else{
        return null
    }
}

export default Alert 