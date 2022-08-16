import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = (props) => {
    const [dato,setDato]= useState({mailSaliente:"",servidorMail:"",puertoMail:"",interesBcp:"",interesMoratorio:"",interesPunitorio:""})
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
        <div className="container justify-content-center">
            <div class="row">
                <div class="col-lg-3">
                    <label for="mailSaliente" class="form-label">Email sistema</label>
                    <input name="mailSaliente" type="email" class="form-control" id="mailSaliente" placeholder="name@example.com" onChange={handleChange} value={dato.mailSaliente}/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <label for="servidorMail" class="form-label">Servidor email</label>
                    <input name="servidorMail" type="text" class="form-control" id="servidorMail" placeholder="www.example.com" onChange={handleChange} value={dato.servidorMail}/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <label for="puertoMail" class="form-label">Puerto email</label>
                    <input name="puertoMail" min="0" type="number" class="form-control" id="puertoMail"  onChange={handleChange} value={dato.puertoMail}/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <label for="interesBcp" class="form-label">Interes BCP</label>
                    <input name="interesBcp" min="0" type="number" class="form-control" id="interesBcp" onChange={handleChange} value={dato.interesBcp}/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <label for="interesMoratorio" class="form-label">Interes moratorio</label>
                    <input name="interesMoratorio" min="0" type="number" class="form-control" id="interesMoratorio" onChange={handleChange} value={dato.interesMoratorio}/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <label for="interesPunitorio" class="form-label">Interes punitorio</label>
                    <input name="interesPunitorio" min="0" type="number" class="form-control" id="interesPunitorio" onChange={handleChange} value={dato.interesPunitorio}/>
            </div>
            <div className='row '>
                <div className="col-sm-3">
                    <button onClick={handleAdd} className="btn btn-success">Guardar</button>
                    <button className='btn btn-success'>Volver</button>
                </div>
            </div>
        </div>
    </>

  )
}

Formulario.propTypes = {

}

export default Formulario
