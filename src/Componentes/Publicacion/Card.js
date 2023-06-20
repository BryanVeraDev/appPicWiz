import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({tie}) => {

  var ruta = "/publicacion/" + tie.id;

    return (


<div class="card">
  <img class="card-img-top img-fluid rounded" src={tie.imagen_URL} alt={tie.descripcion}/>
  <div class="card-body">
    <h5 class="card-title">{tie.titulo}</h5>
    <p class="card-text">{tie.descripcion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Autor: {tie.id_usuario.nombre}</li>
    <li class="list-group-item">Fecha Publicación: {tie.fecha_publicacion}</li>
  </ul>
  <div class="card-body">
    <Link class="card-link" to={ruta}>Ver Post</Link>
  </div>
</div>


    );
};


export default Card;