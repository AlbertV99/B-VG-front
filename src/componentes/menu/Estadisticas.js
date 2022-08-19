import React from "react";
import {Link} from "react-router-dom"

const Estadisticas = () => {

  return (
    <>
         <h2>Menu de Estadisticas</h2>
       <div class="row">
            <div class="col-lg-3">
                <Link to="/parmetros"><button type="button" className="btn btn-outline-dark">Estadistica Usuario</button></Link>   
            </div>
        </div>
    </>

  )
}





export default Estadisticas