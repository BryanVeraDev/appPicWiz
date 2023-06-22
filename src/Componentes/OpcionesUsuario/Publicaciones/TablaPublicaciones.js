import React from 'react';
import FilaPublicacion from './FilaPublicacion';

const Tabla = ({data, editarPublicacion, loading}) => {
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
                                        <FilaPublicacion
                                            key = {tie.id}
                                            tie = {tie}
                                            editarPublicacion={editarPublicacion}
                                            loading={loading}
                                        />
                               
                                    )   
                                     )}
                                </tbody>
                            </table>
                        ): (
                            <div className="d-flex justify-content-center align-items-center vh-100">
                                <div className="text-center">
                                    <h3 className="text-muted mt-5">No hay publicaciones</h3>
                                    <p className="lead">¡Vuelve pronto para ver nuevas publicaciones!</p>
                                </div>
                            </div>
                        )
                    }
                
        </div>
    );
};



export default Tabla;