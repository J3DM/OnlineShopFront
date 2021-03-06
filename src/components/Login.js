import React from "react"

import InputText from "./elements/InputText"
//import Button from "./elements/Button"
import CloseButton from "./elements/ButtonCloseModal"

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
        }
        this.onChangeHandler=this.onChangeHandler.bind(this)
    }
    onChangeHandler(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    render(){
        var inputDataEmail={
            class:"",
            name:"email",
            type:"text",
            value:this.state.email, 
            inputText:"Email",
            description:"emailHelp",
            help:"Enter email",
            id:"inptLoginEmail"
        }
        var inputDataPassword={
            class:"",
            name:"password",
            type:"password",
            value:this.state.password,
            inputText:"Password",
            description:"passwordHelp",
            help:"Enter password",
            id:"inptLoginPassword"
        }
/*        var buttonDataSubmit={
            type:"submit",
            class:"btn-primary",
            text:"Login"
        }*/
        var ModalContent
        var ButtonModal
        var ButtonUser
        if(this.props.userLoggedIn==="true"){
            ModalContent=<h3>{this.props.user.name+" logged in"}</h3>
            ButtonModal=<button type="button" className="close" data-dismiss="modal" aria-label="Close">Close</button>
            ButtonUser=""
        }else{
            ModalContent=<form>
                            <InputText
                                input={inputDataEmail}
                                onChange={this.onChangeHandler}    
                            />
                            <InputText
                                input={inputDataPassword}
                                onChange={this.onChangeHandler}    
                            />
                        </form>
            ButtonModal=<div className="col-5">
                                <button 
                                    type="" 
                                    className="btn btn-primary btn-block"
                                    data-dismiss="modal" 
                                    aria-label="Login"
                                    onClick={()=>this.props.loginMethod(this.state.email,this.state.password)}
                                >Login</button>
                            </div>
            ButtonUser=<div className="col-5">
                                <button 
                                    type=""
                                    className="btn btn-success btn-block"
                                    data-toggle="modal"
                                    data-dismiss="modal" 
                                    aria-label="Login"
                                    data-target="#CreateModal"
                                >Create</button>
                            </div>
            // <Button
            //                 button={buttonDataSubmit}
            //                 onClick={()=>this.props.loginMethod(this.state.email,this.state.password)}
            //             />
        }

        return(
            <div className="modal fade" id="LoginModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary text-white">
                            <h3>Login</h3>
                        </div>
                        <div className="modal-body">
                            {ModalContent}
                        </div>
                        <div className="modal-footer">                       
                        {ButtonUser}
                        {ButtonModal}
                        <CloseButton />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login