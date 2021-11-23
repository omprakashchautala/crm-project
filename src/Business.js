import React from "react";
class Personal extends React.Component{
    constructor(){
        super();
        this.state={
            businessname:"",
            businessdescription:"",
            businessaddress:""
        }
        this.handlesubmit=this.handlesubmit.bind(this)
    }
   businessnamethandler=(event)=>{
        this.setState({
            businessname:event.target.value
       })
    }
    businessdescriptionhandler=(event)=>{
        this.setState({
            businessdescription:event.target.value
        })
    }
    businessaddresshandler=(event)=>{
       this.setState({
            businessaddress:event.target.value
        })
    }
    handlesubmit=(event)=>{
        if(this.state.businessname===""){
            alert("fill the businessname")
        }
        else if(this.state.businessdescription===""){
           alert("fill the businessdescription")
        }
        else if(this.state.businessaddress===""){
           alert("fill the businessaddress")
        }
        else{
            localStorage.setItem("Business",this.state)
        alert("Registerd successfully")
        }
        this.setState({
            businessname:"",
            businessdescription:"",
            businessaddress:""
        })
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <h1>Business Detail</h1>
                    Businessname:<input type="text" value={this.state.businessname} onChange={this.businessnamethandler}/>
                    <br/>
                    Businessdescription:<input type="text" value={this.state.businessdescription} onChange={this.businessdescriptionhandler}/>
                    <br/>
                    Businessaddress:<input type="text" value={this.state.businessaddress} onChange={this.businessaddresshandler}/>
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
export default Personal;
