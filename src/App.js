import React from 'react';
import './App.css';
import {Outlet} from 'react-router-dom';
import  Navbar from './componentes/menu/Navbar';
import Sidebar from './componentes/menu/Sidebar';


function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Sidebar/>
      
       <div>
          <Outlet/>
        </div>
    </div>
  );
}

export default App;
