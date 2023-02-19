import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from './Components/NavBar';
 import Banner from './Components/Banner';
 import List from './Components/List';


function App() {
  return (
    <React.Fragment> 
      {/* <>codes</>  this is short form of React.Fragement*/}
      
      
   <Navbar/>
   <Banner/> 
   <List/>

    </React.Fragment>
  
  );
}

export default App;
