import React from 'react';
import { Link } from 'react-router-dom';
import {Spinner } from 'react-bootstrap';

const FilaPublicacion = ({tie, editarPublicacion, loading}) => {

    console.log(tie);
    var ruta = "/publicacion/" + tie.id;

    return (
        <tr>
        <td>{tie.id}</td>
        <td>{tie.fecha_publicacion}</td>
        <td>{tie.titulo}</td>
        <td>{tie.descripcion}</td>
        <td>

            <Link to={ruta} class="nav-link active">Ver Post</Link>
        </td>
        <td>
            <button type="button" class="btn btn-primary" onClick={() => editarPublicacion(tie.id)} disabled={loading}>
            {loading && <Spinner animation="border" size="sm" />}
                Actualizar</button>
        </td>
        </tr>

    );
};

export default FilaPublicacion;