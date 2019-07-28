import React from "react"

import InputText from "./elements/InputText"

class UserInfo extends React.Component{
    
    render(){
        //
        //console.log("UserInfo",this.props)
        //console.log("UserInfo username:",this.props.user.name)
    var nameInputProperties={
        class:"",
        name:"name",
        type:"text",
        value:this.props.user.name, 
        inputText:"User",
        description:"userHelp",
        help:"User name",
        id:"inputUserName"
    }
    var emailInputProperties={
        class:"",
        name:"email",
        type:"text",
        value:this.props.user.email, 
        inputText:"Email",
        description:"emailHelp",
        help:"User email",
        id:"inputUserEmail"
    }
    return(
        <div className="modal fade" id="UserModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-white">
                        <h3>User details</h3>
                    </div>
                    <div className="modal-body">
                        <InputText input={nameInputProperties} onChange={this.props.onChangeName}/>
                        <InputText input={emailInputProperties} onChange={this.props.onChangeEmail}/>
                    </div>
                    <div className="modal-footer"> 
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <button 
                                        type="button" 
                                        className="btn btn-warning" 
                                        data-dismiss="modal" 
                                        aria-label="Close"
                                        onClick={this.props.editUser}
                                    >Edit</button>
                                </div>
                                <div className="col-6">
                                    <button 
                                        type="button" 
                                        className="close" 
                                        data-dismiss="modal" 
                                        aria-label="Close"
                                    >Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
}

export default UserInfo