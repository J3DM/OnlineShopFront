import React from "react"

function Navbar(props){
    //console.log(props)
    var Button
    var UserData
    var RoleButton
    var ProductButton
    if(props.user.role==="MANAGER"){
        ProductButton= <button 
                type="button" 
                className="btn btn-info mr-sm-2" 
                data-toggle="modal" 
                data-target="#NewProductModal"
            >New Product</button>
    }else{
        ProductButton= ""
    }
    if(props.user.role==="ADMIN"){
        RoleButton=
            <button 
                type="button" 
                className="btn btn-success m-2 mr-2" 
                data-toggle="modal" 
                data-target="#RoleModal"
            >Give Roles</button>
        ProductButton= <button 
                type="button" 
                className="btn btn-info m-2 mr-2" 
                data-toggle="modal" 
                data-target="#NewProductModal"
            >New Product</button>
    }else{
        RoleButton=""
    }
    if (props.user._id!==""){
        Button=""
        UserData=<div className="contaier bg-dark p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-white" >
                            <div className="col-12">
                                <h3>User data</h3>
                            </div>
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
                            <br/>
                            <div className="row">
                            </div>
                                <button 
                                    className="btn btn-info" data-toggle="modal" data-target="#UserModal">Edit User Details</button>
                        </div>
                        <div className="col-12  col-sm-6">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-white">Purchase</h3>
                                </div>
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
                            <br/>
                            <div  className="row">
                                <div className="col-6">
                                    <h5  className="text-white">Pending Sales</h5>
                                </div>
                                <div>
                                    <button 
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#PendingModal"
                                        onClick={()=>{props.getPendingSale()}}
                                        // setPendingSale={props.setPendingSale}
                                        >Show</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <div className="col-12">
                        {RoleButton}
                        {ProductButton}
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
        <nav className="navbar navbar-dark bg-dark"  type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" >
            <div className="col-9">
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