import React from "react"
import InputText from "../../elements/InputText"

function NewUserForm(props){
    var nameInput={
        class:"",
        name:"name",
        type:"text",
        value:props.user.name,
        inputText:"Name",
        description:"nameHelp",
        help:"User name",
        id:"newUserNameInput"
    }
    var emailInput={
        class:"",
        name:"email",
        type:"text",
        value:props.user.email,
        inputText:"Email",
        description:"emailHelp",
        help:"User email",
        id:"newUserEmailInput"
    }
    var passwordInput={
        class:"",
        name:"password",
        type:"text",
        value:props.user.password,
        inputText:"Password",
        description:"passwordHelp",
        help:"User password",
        id:"newUserPasswordInput"
    }
    return(
        <form>
            <InputText input={nameInput} onChange={props.onChange}/>
            <InputText input={emailInput} onChange={props.onChange}/>
            <InputText input={passwordInput} onChange={props.onChange}/>
        </form>
    )
}

export default NewUserForm