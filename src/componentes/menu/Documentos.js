import React from "react";
import {Link} from "react-router-dom"

const Documentos = () => {

  return (
    <>
         <h2>Menu de Documentos</h2>
       <div class="row">
            <div class="col-lg-3">
                <Link to="/parmetros"><button type="button" className="btn btn-outline-dark">documentos</button></Link>   
            </div>
        </div>
    </>

  )
}





export default Documentos