import React from "react"

function Navbar(props){
    var Button
    var UserData
    if (props.user.email){
        Button=""
        UserData=<div className="contaier bg-dark p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-white" >
                            <div className="row">
                                <div className= "col-6"> 
                                    <h5>User</h5>
                                </div>
                                <div className= "col-6"> 
                                    <h5 className="">{props.user.name}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className= "col-6"> 
                                    <h6>Email</h6>
                                </div>
                                <div className= "col-6"> 
                                    <h6 className="">{props.user.email}</h6>
                                </div>
                            </div>
                            <div className="row">
                            </div>
                                <button 
                                    className="btn btn-info" data-toggle="modal" data-target="#UserModal">Edit User Details</button>
                        </div>
                        <div className="col-12  col-sm-6">
                            <div className="row">
                                <p></p>
                            </div>
                            <div  className="row">
                                <div className="col-6">
                                    <h5  className="text-white">Shopping Cart</h5>
                                </div>
                                <div>
                                    <button 
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#ListModal">Show</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br/>
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