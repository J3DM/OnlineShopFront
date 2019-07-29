import React from "react"
import InputText from "../../elements/InputText"

function RoleFormulary(props){

    var emailInput={
        class:"",
        name:"email",
        type:"text",
        value:props.role.name,
        inputText:"Email",
        description:"emailHelp",
        help:"User email",
        id:"EditRoleEmail"
    }
    return (
        <form>
            <InputText input={emailInput} onChange={props.onChange}/>
            <select className="custom-select" id="inputGroupSelect01" onChange={props.changeRole}>
                <option value="" defaultValue>Choose a role...</option>
                <option value="COSTUMER" >Customer</option>
                <option value="ADMIN">Admin</option>
                <option value="MANAGER">Manager</option>
            </select>
        </form>
    )
}

export default RoleFormulary