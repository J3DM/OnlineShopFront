import React from "react"
import Page from "./Page"

function Pagination(props){
    //console.log(props.pages)
    var pages=[]
    for (var i=0;i<(props.pages);i++){
        pages.push(<Page 
                    key={"goPage"+i} 
                    page={i} 
                    onClick={props.giveProductsPage}/>)
    }
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                <a className="page-link" href="#head" aria-label="Previous" onClick={()=>props.giveProductsPage(0)}>
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                {pages}
                <li className="page-item">
                <a className="page-link" href="#head" aria-label="Next"  onClick={()=>props.giveProductsPage(props.pages-1)}>
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination