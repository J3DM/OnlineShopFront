import React from "react"

function Navbar(props){
    var Button
    if (props.user.email){
        Button=props.logoutButton
    }else{
        Button=props.loginButton
    }
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="col-9">
                <h3>OnlineShop</h3>
            </div>
            <div className="col-3">
                {Button}
            </div>
        </nav>
    )
}

export default Navbar