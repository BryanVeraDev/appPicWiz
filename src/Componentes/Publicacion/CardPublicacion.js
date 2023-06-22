import React from "react";
import Card from "./Card";
import "./CardPublicacion.css";

const CardPublicacion = ({ data }) => {
  return (
    <div className="card-publicacion">
      {data.length > 0 ? (
        <div class="card-deck">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.map((tie) => (
              <div class="col mb-4">
                <Card key={tie.id} tie={tie} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
            <h3 className="text-muted mt-5">No hay publicaciones</h3>
            <p className="lead">
              ¡Vuelve pronto para ver nuevas publicaciones!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPublicacion;
