import React from 'react';
import { Link } from 'react-router-dom'


//redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction } from '../actions/productoActions'

const ProductoUnico = ({ producto }) => {
    
    const { nombre, precio, id } = producto
    
    const dispatch = useDispatch()
    
    //confirmar si desea eliminar 
    const confirmarEliminarProducto = id => { 
        //preguntar al usuario


        //pasarlo al action
        dispatch(borrarProductoAction(id))
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td className='acciones'>
                <Link to={`/productos/editar/${id}`} className='btn btn-primary mr-2'> Editar </Link>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default ProductoUnico;