import React from "react";

class validation extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            password:"",
            nameError:"",
            PasswordError:""
        }
    }
    valid(){
        if(!this.state.name.includes("@") && this.state.password.length<5)
        {
            this.setState({
                nameError:"invalid Name",passwordError:"password length should be more than 5"
            })
        }
         else if(!this.state.name.includes("@"))
        {
            this.setState({
                nameError:"invalid Name"
            })
        }
         else if(this.state.password.length<5)
        {
            this.setState({
                passwordError:"password length should be more than 5"
            })
        }
        else{
            return true
        }
    }
    submit(){
        this.setState({
            nameError:"",passwordError:""
        })
        if(this.valid()){
            localStorage.setItem("Business",this.state)
            alert("form has been submitted")
        }
    }
    render(){
        return(
            <div>
                <h1>Login page</h1>
                <input type="text" placeholder="Name" onChange={(event)=>{this.setState({name:event.target.value})}}/>
                <p style ={{color:"red",fontSize:"15px"}} >{this.state.nameError}</p>
                <input type="password" placeholder="password" onChange={(event)=>this.setState({password:event.target.value})}/>
                <p style ={{color:"red",fontSize:"15px"}} >{this.state.passwordError}</p>
                <br/>
                <button onClick={()=>this.submit()}>submit</button>
                
            </div>
        );
    }
}
export default validation;