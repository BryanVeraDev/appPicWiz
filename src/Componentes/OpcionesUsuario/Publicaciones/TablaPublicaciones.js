import React from 'react';
import FilaPublicacion from './FilaPublicacion';

const Tabla = ({data, editarPublicacion, loading}) => {
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Título</th>
                    <th>Descripción</th>
                </thead>
                <tbody>

                    {
                        data.length > 0 ? (
                            data.map((tie) => (
                                <FilaPublicacion
                                key = {tie.id}
                                tie = {tie}
                                editarPublicacion={editarPublicacion}
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