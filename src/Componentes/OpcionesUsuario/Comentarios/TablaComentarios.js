import React from 'react';
import FilaComentario from './FilaComentario';

const Tabla = ({data, deleteComentario, editarComentario, loading}) => {
    return (
        <div>

                    {
                        data.length > 0 ? (
                            <table class="table table-striped">
                                <thead>
                                    <th>Id</th>
                                    <th>Fecha</th>
                                    <th>Comentario</th>
                                    <th>Publicacion</th>
                                </thead>
                                <tbody>
                                    {data.map((tie) => (
                                        <FilaComentario
                                            key = {tie.id}
                                            tie = {tie}
                                            deleteComentario={deleteComentario}
                                            editarComentario={editarComentario}
                                            loading={loading}
                                        />
                               
                                    )   
                                    )}
                            </tbody>
                        </table>
                        ): (
                            <div className="d-flex justify-content-center align-items-center vh-100">
                                <div className="text-center">
                                    <h3 className="text-muted mt-5">No hay comentarios</h3>
                                    <p className="lead">¡Vuelve pronto para ver nuevas comentarios!</p>
                                </div>
                            </div>
                        )
                    }
                
                
        </div>
    );
};



export default Tabla;