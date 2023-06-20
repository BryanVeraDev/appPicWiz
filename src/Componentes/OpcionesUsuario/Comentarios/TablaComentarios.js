import React from 'react';
import FilaComentario from './FilaComentario';

const Tabla = ({data, deleteComentario, editarComentario, loading}) => {
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Comentario</th>
                    <th>Publicacion</th>
                </thead>
                <tbody>

                    {
                        data.length > 0 ? (
                            data.map((tie) => (
                                <FilaComentario
                                key = {tie.id}
                                tie = {tie}
                                deleteComentario={deleteComentario}
                                editarComentario={editarComentario}
                                loading={loading}
                                />
                               
                            )   
                        )
                        ): (
                            <tr>
                                <td colSpan = "6">
                                    <img src = "https://media.tenor.com/b0AYSDwOv90AAAAS/carga.gif" alt = "Error"></img>
                                    </td>


                            </tr>
                        )
                    }
                
                </tbody>
            </table>
        </div>
    );
};



export default Tabla;