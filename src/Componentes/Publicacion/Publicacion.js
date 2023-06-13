import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const Publicacion = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [titulo, setTitulo] = useState('');
  const [imagenURL, setImagenURL] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [comentarios, setComentarios] = useState([]);


  useEffect(() => {
    /* const fetchData = async () => {
         try{
             const response = await axios ({
                 url: "http://localhost:8080/Turismo/api/apiturista/turista",
             });
             setList(response.data);
         } catch(error){
             console.log(error);
         }
     };*/
     fetchData();

 },  );

 //const id = "12";

 const SEARCH_URL_PUBLICACION = "http://localhost:8080/PicWiz/api/apipublicacion/publicacion/12";
 const SEARCH_URL_COMENTARIO = "http://localhost:8080/PicWiz/api/apicomentario/comentario/idpublicacion/12";


  const fetchData = async () => {
    try{
        const response = await axios.get (
            SEARCH_URL_PUBLICACION
        );
        console.log(JSON.stringify(response.data));
        setNombreUsuario(response.data.id_usuario.nombre);
        setTitulo(response.data.titulo);
        setImagenURL(response.data.imagen_URL);
        setDescripcion(response.data.descripcion);

        const comentario = await axios.get (
          SEARCH_URL_COMENTARIO
        );
        console.log(JSON.stringify(comentario.data));
        setComentarios(comentario.data);
    } catch(error){
        console.log("Se produjo un error");
    }
};

  return (

  
    <div>
      <div>
        <span>{nombreUsuario}</span>
        <button>Usuario</button>
      </div>
      <div>{titulo}</div>
      <img src={imagenURL} alt="Imagen" />
      <div>{descripcion}</div>
      <div>
        {comentarios.map((comentario, index) => (
          <div key={index}>{comentario.texto} - {comentario.idUsuario.nombre}</div>
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
