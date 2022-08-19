import React from 'react';
import './App.css';
import {Outlet} from 'react-router-dom';
import  Navbar from './componentes/menu/Navbar';
import Sidebar from './componentes/menu/Sidebar';
import {Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='container-app'>
          <Sidebar/>
          <div>
            <Outlet/>
          </div>
        </div>
    </div>
  );
}

export default App;
