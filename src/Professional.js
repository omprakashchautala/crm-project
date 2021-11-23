import React from "react";
class Personal extends React.Component{
    constructor(){
        super();
        this.state={
            currentjob:"",
            previousjob:"",
            designation:"",
            jobaddress:""
        }
        this.handlesubmit=this.handlesubmit.bind(this)
    }
    currentjobhandler=(event)=>{
        this.setState({
            currentjob:event.target.value
        })
    }
    previousjobhandler=(event)=>{
        this.setState({
            previousjob:event.target.value
        })
    }
    designationhandler=(event)=>{
        this.setState({
            designation:event.target.value
        })
    }
    jobaddresshandler=(event)=>{
        this.setState({
            jobaddress:event.target.value
        })
    }
    handlesubmit=(event)=>{
        if(this.state.currentjob===""){
         alert("fill the currentjob")
        }
        else if(this.state.previousjob===""){
            alert("fill the previousjob")
           }
           else if(this.state.designation===""){
            alert("fill the designation")
           }
           else if(this.state.jobaddress===""){
            alert("fill the jobaddress")
           }
        else{
            localStorage.setItem("Professional",this.state)
        alert("Registerd successfully")
        }
        this.setState({
            currentjob:"",
            previousjob:"",
            designation:"",
            jobaddress:""
        })
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <h1>professional Detail</h1>
                    Currentjob:<input type="text" value={this.state.currentjob} onChange={this.currentjobhandler}/>
                    <br/>
                    Previousjob:<input type="text" value={this.state.previousjob} onChange={this.previousjobhandler}/>
                    <br/>
                     Jobaddress:<input type="text" value={this.state.jobaddress} onChange={this.jobaddresshandler}/>
                    <br/>
                    Designation:<select  onChange={this.designationhandler} defaultValue="select Designation">
                        <option defaultValue>Select Designation</option>
                        <option value="Developer">Developer</option>
                        <option value="Tester">Tester</option>
                        </select><br/>
                        <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
export default Personal;