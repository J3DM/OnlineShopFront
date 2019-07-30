import React from "react"
import AlertLine from "./AlertLine"

function Alert(props){
    //var id=0
    var alerts=props.alerts.map((alertItem,id)=>
        {
            return <AlertLine key={id} alert={alertItem} onClick={props.onClick} id={id}/>
      //      id++
        }
    )
    if(props.alerts[0]){
        return(
            <div>
                {alerts}
            </div>
        )
    }else{
        return ""
    }
}

export default Alert 