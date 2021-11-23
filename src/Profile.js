import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            img:" "
        }
    }
    upload(e){
        const files=e.target.files
        let result = URL.createObjectURL(files[0]);
        this.setState({img:result})
        localStorage.setItem("Profile",this.state)
        }
    render(){
        return(
            <div>
                <h>Profile image</h>
                <img src={this.state.img}/>
                <input type="file" onChange={(e)=>this.upload(e)} name="img"/>
            </div>
        );
    }
}
export default Profile;