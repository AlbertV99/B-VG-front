import React,{useState,useEffect} from 'react'
import Tabla from './Tabla'
import Formulario from './Formulario'
import FetchUsuario from '../../helpers/peticiones'


export const Panel = () => {
    const [datos,setDatos] = useState({"pagina_actual":0,"cantidad_paginas":0,"datos":[]});
    const [estadoForm,setEstadoForm] = useState(false);
    const [obtenerPanel] = FetchUsuario();
    useEffect(()=>{
        obtenerPanel("usuario",setDatos)
        console.log(datos);
    },[])
    return (
        <div className="container-fluid">
            <div className="row">
                <h1 style={{color:"white"}}>Usuario</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <form >
                        <div className="row">
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder="Buscar..."/>
                            </div>
                            <div className="col-sm-4">
                                <button className="btn-primary btn" type='submit'>Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-6 text-end">
                    <button className="btn btn-success" onClick={()=>{ setEstadoForm(!estadoForm)}}>{!estadoForm?"Nuevo":"Cerrar"}</button>
                    <button className="btn btn-secondary" onClick={()=>{}}>Modificar</button>
                    <button className="btn btn-danger" onClick={()=>{}}>Eliminar</button>
                </div>
            </div>
            <div className="row" style={{paddingTop:"25px"}}>
                {estadoForm && <Formulario/>}
                <p></p>
                <hr/>
            </div>
            <div className="row">
                <br/>
                <Tabla datos={datos}/>
            </div>
        </div>
    )
}
