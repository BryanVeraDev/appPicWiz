import React from 'react';
import Card from './Card';

const CardPublicacion = ({data}) => {
    return (
        <div>
                {
                    data.length > 0 ? (
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {data.map((tie) => (
                                <Card
                                    key ={tie.id}
                                    tie = {tie}             
                                />
                            ))}
                        </div>
                    ) : (
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

export default CardPublicacion;