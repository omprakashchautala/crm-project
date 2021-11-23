import React from "react";
import Validation from "./Validation ";
import Personal from "./Personal";
import Professional from "./Professional"
import Business from './Business'
import Profile from "./Profile";
import {Routes,Route,Link} from 'react-router-dom';

class MainUser extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>User Registeration</h1>
                    <Link to="/">Validation</Link>
                    <br/>
                    <Link to="/Personal">Personal</Link>
                    <br/>
                    <Link to="/professional">Professional</Link>
                    <br/>
                    <Link to="/business">Business</Link>
                    <br/>
                    <Link to="/profile">Profile</Link>
                    

                {/* <Router> */}
                    <Routes>
                    <Route exact path="/" element={<Validation/>}/>
                    <Route exact path="/personal" element={<Personal/>}/>
                    <Route exact path="/professional" element={<Professional/>}/>
                    <Route exact path="/business" element={<Business/>}/>
                    <Route exact path="/profile" element={<Profile/>}/>
                    </Routes>
                    
                {/* </Router> */}
            </div>
        );
    }
}
export default MainUser;