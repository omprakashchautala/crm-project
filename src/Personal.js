import React from "react";

 class Personal extends React.Component{
     constructor(){
         super();
         this.state={
             firstname:"",
             lastname:"",
             dob:"",
             address:"",
             gender:""
         }
         this.handlesubmit=this.handlesubmit.bind(this)
     }
     
    firsthandler=(event)=>{
         this.setState({
             firstname:event.target.value
        })
     }
     lasthandler=(event)=>{
         this.setState({
             lastname:event.target.value
         })
     }
     dobhandler=(event)=>{
        this.setState({
            dob:event.target.value
         })
     }
     addresshandler=(event)=>{
        this.setState({
             address:event.target.value
         })
     }
     genderhandler=(event)=>{
         this.setState({
             gender:event.target.value
         })
     }
     handlesubmit=(event)=>{
         if(this.state.firstname===""){
         alert("fill the firstname")
         }
         else if(this.state.lastname===""){
             alert("fill te lastname")
         }
         else if(this.state.dob===""){
            alert("fill the dob")
           }
          else  if(this.state.address===""){
            alert("fill the address")
           }
           else if(this.state.gender===""){
            alert("fill the gender")
           }
         else{
             localStorage.setItem("Personal",this.state)
         alert("Registerd successfully")
         }
         this.setState({
             firstname:"",
             lastname:"",
             dob:"",
             address:"",
             gender:""
         })
         event.preventDefault()
     }
     render(){
         return(
             <div>
                 <form onSubmit={this.handlesubmit}>

                     <h1>Personal Detail</h1>
                     Firstname:<input type="text" value={this.state.firstname} onChange={this.firsthandler}/>
                     <br/>
                     Lastname:<input type="text" value={this.state.lastname} onChange={this.lasthandler}/>
                     <br/>
                     Dob<input type="date" value={this.state.dob} onChange={this.dobhandler}/>
                     <br/>
                  Address:<input type="text" value={this.state.address} onChange={this.addresshandler}/>
                     <br/>
                     Gender:<select  onChange={this.genderhandler} defaultValue="select Gender">
                         <option defaultValue>Select Gender</option>
                        <option value="male">male</option>
                         <option value="female">female</option>
                         </select><br/>
                         <input type="submit" value="submit"/>
                 </form>
             </div>
         )
     }
 }
 export default Personal;


