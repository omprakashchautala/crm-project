import React from "react";

class Data extends React.Component{
    setData(){
        let obj={name:'om',age:'24',email:'mymail@mail.com'}
        localStorage.setItem('myData',JSON.stringify(obj));
    }
    getData(){
        let data=localStorage.getItem('myData');
        data=JSON.parse(data);
        console.log(data)
    }
    render(){
        return(
            <div>
                <h1>Local storage</h1>
                <button onClick={()=>this.setData()}>Set Data</button>
                <button onClick={()=>this.getData()}>Get Data</button>
            </div>
        );
    }
}
export default Data;