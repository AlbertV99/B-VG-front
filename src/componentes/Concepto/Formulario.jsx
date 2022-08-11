import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = (props) => {
    const [dato,setDato]= useState({tarea:""})
    const handleChange = (e) => {
      setDato({
        ...dato,
        [e.target.name]: e.target.value,
      });
    };
    const handleAdd = (e)=>{
        console.log(dato)
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <label className="mx-1 d-grid gap-2">
                        Nombre:{" "}
                    </label>
                </div>
                <div className="col-sm-8">
                    <input
                        onChange={handleChange}
                        name="tarea"
                        value={dato.tarea}
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        />
                </div>
                <div className="col-sm-2">
                    <button onClick={handleAdd} className="btn btn-success">Nuevo</button>
                </div>
            </div>
        </div>
    </>

  )
}

Formulario.propTypes = {

}

export default Formulario
