import React from "react";
import {Link} from "react-router-dom"

const Creditos = () => {

  return (
    <>
     <h2>Menu de Creditos</h2>
     <div class="row">
        <div class="col-lg-3">
            <Link to="/parmetros"><button type="button" className="btn btn-outline-dark">Clientes</button></Link>   
        </div>
      </div>
    </>

  )
}





export default Creditos