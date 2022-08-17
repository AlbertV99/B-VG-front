import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Panel from './componentes/Parametro/Panel';
import  Navbar from './componentes/menu/Navbar';
import Sidebar from './componentes/menu/Sidebar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
