import React from "react";
import {Link} from "react-router-dom"

const Sidebar = () => {

  return (
    <>
      <div className="sidebar"> 
        <ul>
          <li>
            <Link to="/seguridad"><button type="button" className="btn btn-outline-light">Seguridad</button></Link>
          </li >
          <li >
            <Link to="/documentos"><button type="button" className="btn btn-outline-light">Documentos</button></Link>
          </li>
          <li >
            <Link to="/creditos"><button type="button" className="btn btn-outline-light">Creditos</button></Link>
          </li>
          <li >
            <Link to="/reportes"><button type="button" className="btn btn-outline-light">Reportes</button></Link>
          </li>
          <li >
            <Link to="/estadisticas"><button type="button" className="btn btn-outline-light">Estadisticas</button></Link>
          </li>
        </ul>
      </div>
    </>

  )
}





export default Sidebar