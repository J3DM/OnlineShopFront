import React from "react"

function Navbar(props){
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="col-9">
                <h3>OnlineShop</h3>
            </div>
            <div className="col-3">
                {props.loginButton}
            </div>
        </nav>
    )
}

export default Navbar