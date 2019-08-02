import React from "react"

function AlertLine(props){
    //console.log(props)
    return(
        <div className={"alert "+props.alert.class+" alert-dismissible fade show"} role="alert">
            <strong>{props.alert.title}</strong> {props.alert.msg}.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>props.onClick(props.id)}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default AlertLine