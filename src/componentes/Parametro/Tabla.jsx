import React from 'react'
import PropTypes from 'prop-types'
import Fila from './Fila'

const  Tabla = ({datos}) => {
    //// <th>Nombre</th><th>Correo</th><th>Rol</th>
  return (
    <>
        <table className="table table-striped table-hover" style={{backgroundColor:"#ffffff"}}>
            <thead>
                <tr style={{backgroundColor:'darkblue',color:'white'}}>

                    {
                        datos.cabecera.map(
                            (dato) => {
                             return  <th>{dato}</th>
                            }
                        )
                    }

                </tr>
            </thead>
            <tbody>
                {
                    datos.lista.map(
                    (fila)=>{
                        return <Fila key="fila-{fila.dato1}" dato ={fila}/>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

Tabla.propTypes = {
    datos:PropTypes.object
}

export default Tabla
