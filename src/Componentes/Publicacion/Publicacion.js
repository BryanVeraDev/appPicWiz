import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Publicacion = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [imagenURL, setImagenURL] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los datos de la publicación
    axios.get('https://api.example.com/publicaciones/1')
      .then(response => {
        const data = response.data;
        setNombreUsuario(data.nombreUsuario);
        setImagenURL(data.imagenURL);
        setDescripcion(data.descripcion);
        setComentarios(data.comentarios);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (

  
    <div>
      <div>
        <span>{nombreUsuario}</span>
        <button>Usuario</button>
      </div>
      <img src={imagenURL} alt="Imagen" />
      <div>{descripcion}</div>
      <div>
        {comentarios.map((comentario, index) => (
          <div key={index}>{comentario}</div>
        ))}
      </div>
      <div>
        <input type="text" placeholder="Escribe un comentario" />
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default Publicacion;
