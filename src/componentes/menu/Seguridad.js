import React from "react";
import {useNavigate} from "react-router-dom"



const Seguridad = () => {
  let navigate = useNavigate()
  return (
    <>
       <h2>Menu de Seguridad</h2>
       <div class="row">
            <div class="col-lg-2">
                <button onClick={() => navigate("/parametros")} type="button" className="btn btn-outline-dark">Parametros</button>
            </div>
            <div class="col-lg-2">
                <button onClick={() => navigate("/agrupador")} type="button" className="btn btn-outline-dark">Agrupadores</button>
            </div>
            <div class="col-lg-2">
                <button onClick={() => navigate("/banca")} type="button" className="btn btn-outline-dark">Bancas</button>
            </div>
            <div class="col-lg-2">
                <button onClick={() => navigate("/concepto")} type="button" className="btn btn-outline-dark">Conceptos</button>
            </div>
            <div class="col-lg-2">
                <button onClick={() => navigate("/notificacion")} type="button" className="btn btn-outline-dark">Notificaciones</button>
            </div>
            <div class="col-lg-2">
                <button onClick={() => navigate("/perfil")} type="button" className="btn btn-outline-dark">Perfiles</button>
            </div>
            <div class="col-lg-2">
                <button onClick={() => navigate("/usuario")} type="button" className="btn btn-outline-dark">Usuarios</button>
            </div>
        </div>
    </>

  )
}





export default Seguridad