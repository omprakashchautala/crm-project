// import logo from './logo.svg';
import './App.css';
// import Data from './Data';
 import MainUser from './Mainuser';
//  import RightsideBar from "./Rightsidebar"
//  import Leftsidebar from "./Leftsidebar";
// import Pagination from "./Pagination"


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MainUser/> 
      
      {/* <Data/> */}
      {/* <Pagination/> */}
      {/* <RightsideBar/>
      <Leftsidebar/> */}
    </div>
  );
}

export default App;
