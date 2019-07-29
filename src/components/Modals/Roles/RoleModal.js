import React from "react"
import RoleFormulary from "./RoleForm"
import CloseButton from "../../elements/ButtonCloseModal"


class RoleModal extends React.Component{
    
    constructor(){
        super()
        this.state={
            email:"",
            role:""
        }
        this.onChangeHandler=this.onChangeHandler.bind(this)
        this.updateRole=this.updateRole.bind(this)
    }
    onChangeHandler(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value }) 
    }
    updateRole(event){
        this.setState({role:event.target.value})
    }
    render(){
        //console.log(this.props)
        var RoleForm=<RoleFormulary role={this.state} changeRole={this.updateRole} onChange={this.onChangeHandler}/>
        return(
            <div className="modal fade" id="RoleModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary text-white">
                            <div className="container">
                                <div>
                                    <h3>Give Roles</h3>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            {RoleForm}     
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal" 
                                onClick={()=>{this.setState({email:"",role:""});this.props.updateRole(this.state.email,this.state.role)}}>Grant</button>
                            <CloseButton/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoleModal