import React,{useState} from 'react'
import Tabla from './Tabla'
import Formulario from './Formulario'


export  function Panel  ()  {
    const datos = {
        "cabecera":['ID','Tarea'],
        "lista":[
            {"tarea":"1","descripcion":"Prueba de tarea 1"},
            {"tarea":"2","descripcion":"Prueba de tarea 2"},
            {"tarea":"3","descripcion":"Prueba de tarea 3"},
        ],
        
    };
    const [estadoForm,setEstadoForm] = useState(false)
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


