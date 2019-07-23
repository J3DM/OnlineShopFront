import React from "react"

function Navbar(props){
    var Button
    var UserData
    if (props.user.email){
        Button=""
        UserData=<div className="contaier bg-dark p-4">
                    <div className="row">
                        <div className="col-6">
                            <h5 className="text-white">User: {props.user.name}</h5>
                            <p className="text-muted">Email: {props.user.email}</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <h5  className="text-white">Shopping Cart</h5>
                                </div>
                                <div>
                                    <button className="btn btn-primary">Show</button>
                                </div>
                            </div>
                            <div  className="row">
                                <div className="col-6">
                                    <h5  className="text-white">Shopping Cart</h5>
                                </div>
                                <div>
                                    <button className="btn btn-primary">Show</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12">
                        {props.logoutButton}
                    </div>
                </div>
    }else{
        Button=props.loginButton
        UserData=""
    }
    return(
        <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
            {UserData}
        </div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="col-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-7">
                 <h3 className="text-white">OnlineShop</h3>
             </div>
             <div className="col-3">
                 {Button}
             </div>
        </nav>
        </div>
    )
}

export default Navbar