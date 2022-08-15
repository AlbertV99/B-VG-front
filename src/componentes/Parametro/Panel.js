import React,{useState} from 'react'
import Formulario from './Formulario'


const Panel = () => {
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
                <h1 style={{color:"black"}}>Parametros</h1>
            </div>
            <div className="row" style={{paddingTop:"25px"}}>
                <Formulario/>
                <p></p>
            </div>
        </div>
    )
}

export default Panel
