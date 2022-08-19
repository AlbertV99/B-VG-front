import React from "react";
import {Link} from "react-router-dom"

const Reportes = () => {

  return (
    <>
         <h2>Menu de Reportes</h2>
       <div class="row">
            <div class="col-lg-3">
                <Link to="/parmetros"><button type="button" className="btn btn-outline-dark">Listados</button></Link>   
            </div>
        </div>
    </>

  )
}





export default Reportes