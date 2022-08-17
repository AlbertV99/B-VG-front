import React from "react";
import {Link} from "react-router-dom"

const Sidebar = () => {

  return (
    <>
        <div className="sidebar "> 
            <ul>
                <li>
                    <Link to=""> Seguridad</Link>
                </li>
                <li>
                    <Link to=""> Docuementos</Link>
                </li>
                <li>
                    <Link to=""> Creditos</Link>
                </li>
                <li>
                    <Link to=""> Reportes</Link>
                </li>
                <li>
                    <Link to=""> Estadisticas</Link>
                </li>
            </ul>
            <div className="sidebar-conten">

            </div>
        </div>
    </>

  )
}





export default Sidebar