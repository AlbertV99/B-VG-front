import React from 'react'
import PropTypes from 'prop-types'

const Fila = ({dato}) => {
  return (
    <tr>
        <td>{dato.nombre}</td>
        <td>{dato.apellido}</td>
        <td>{dato.cedula}</td>
    </tr>
  )
}

Fila.propTypes = {
    dato:PropTypes.object
}

export default Fila
