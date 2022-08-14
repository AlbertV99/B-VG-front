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
                <div class="mb-3">
                    <label for="mail-saliente" class="form-label">Email sistema</label>
                    <input name="mail_saliente" type="email" class="form-control" id="mail-saliente" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="servidor-mail" class="form-label">Servidor email</label>
                    <input name="servidor-mail" type="text" class="form-control" id="servidor-mail" placeholder="www.example.com"/>
                </div>
                <div class="mb-3">
                    <label for="puerto-mail" class="form-label">Puerto email</label>
                    <input name="puerto-mail" min="0" type="number" class="form-control" id="puerto-mail" />
                </div>
                <div class="mb-3">
                    <label for="interes-bcp" class="form-label">Interes BCP</label>
                    <input name="interes-bcp" min="0" type="number" class="form-control" id="interes-bcp" />
                </div>
                <div class="mb-3">
                    <label for="interes-moratorio" class="form-label">Interes moratorio</label>
                    <input name="interes-moratorio" min="0" type="number" class="form-control" id="interes-moratorio" />
                </div>
                <div class="mb-3">
                    <label for="interes-punitorio" class="form-label">Interes punitorio</label>
                    <input name="interes-punitorio" min="0" type="number" class="form-control" id="interes-punitorio" />
                </div>
                <div className="col-sm-2">
                    <button onClick={handleAdd} className="btn btn-success">Guardar</button>
                </div>
            </div>
        </div>
    </>

  )
}

Formulario.propTypes = {

}

export default Formulario
