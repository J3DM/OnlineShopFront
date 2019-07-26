import React from "react"
import NewUserForm from "./NewUserForm"
import CloseButton from "../../elements/ButtonCloseModal"

class CreateUser extends React.Component{
    render(){
        return(
            <div className="modal fade" id="CreateModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary text-white">
                            <div className="container">
                                <div>
                                    <h3>New User</h3>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <NewUserForm user={this.props.user} onChange={this.props.onChange}/>     
                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-6">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-dismiss="modal" 
                                        onClick={()=>this.props.createUser()}>Create</button>
                                </div>
                                <div className="col-6">
                                    <CloseButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
}

export default CreateUser