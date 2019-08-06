import React from "react"

function Page(props){
    return(
        <li className="page-item">
            <a 
                className="page-link" 
                href="#head" 
                onClick={()=>props.onClick(props.page)}>{props.page+1}</a>
        </li>
    )
}

export default Page