import React from 'react'
import PropTypes from 'prop-types'

const Fila = ({dato}) => {
  return (
    <tr>
        <td>{dato.tarea}</td>
        <td>{dato.descripcion}</td>
    </tr>
  )
}

Fila.propTypes = {
    dato:PropTypes.object
}

export default Fila
