import React from 'react';
import { Link } from 'react-router-dom';
import {Spinner } from 'react-bootstrap';

const FilaComentario = ({tie, deleteComentario, editarComentario, loading}) => {

    console.log(tie);
    var ruta = "/publicacion/" + tie.idPublicacion.id;

    return (
        <tr>
        <td>{tie.id}</td>
        <td>{tie.fecha}</td>
        <td>{tie.texto}</td>
        <td>
            {tie.idPublicacion.titulo}
            <Link to={ruta} class="nav-link active">Ver Post</Link>
        </td>
        <td>
            <button type="button" class="btn btn-primary" onClick={() => deleteComentario(tie.id)}>Eliminar</button>
            <button type="button" class="btn btn-outline-success" onClick={() => editarComentario(tie.id)} disabled={loading}>
            {loading && <Spinner animation="border" size="sm" />}
                Actualizar</button>
        </td>
        </tr>

    );
};

export default FilaComentario;