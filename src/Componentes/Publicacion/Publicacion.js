import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Publicacion = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [titulo, setTitulo] = useState("");
  const [imagenURL, setImagenURL] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [textoComentario, setTextoComentario] = useState("");

  var fecha_registro = new Date().toISOString().slice(0, 19);

  const storedUser = JSON.parse(localStorage.getItem('user'));

  const idPublicacion = useParams().id;
  const intId = parseInt(idPublicacion);

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
    // eslint-disable-next-line
  },[idPublicacion]);

  const SEARCH_URL_PUBLICACION =
  `http://localhost:8080/PicWiz/api/apipublicacion/publicacion/${idPublicacion}`;
  const SEARCH_URL_GET_COMENTARIO =
  `http://localhost:8080/PicWiz/api/apicomentario/comentario/idpublicacion/${idPublicacion}`;
  const SEARCH_URL_POST_COMENTARIO =
    "http://localhost:8080/PicWiz/api/apicomentario/comentario";
    const SEARCH_URL_POST_SEGUIDOR =
    "http://localhost:8080/PicWiz/api/apiseguidor/seguidor";
  

  const fetchData = async () => {
    try {
      const response = await axios.get(SEARCH_URL_PUBLICACION);
      console.log(JSON.stringify(response.data));
      setNombreUsuario(response.data.id_usuario.nombre);
      setTitulo(response.data.titulo);
      setImagenURL(response.data.imagen_URL);
      setDescripcion(response.data.descripcion);

      const comentario = await axios.get(SEARCH_URL_GET_COMENTARIO);
      console.log(JSON.stringify(comentario.data));
      setComentarios(comentario.data);
    } catch (error) {
      console.log("Se produjo un error");
    }
  };

  /*const fetchDataPublicacion = async () => {
    try {
      const response = await axios.get(SEARCH_URL_PUBLICACION);
      console.log(JSON.stringify(response.data));
      setIdPublicacion(response.data.id);
      setNombreUsuario(response.data.id_usuario.nombre);
      setTitulo(response.data.titulo);
      setImagenURL(response.data.imagen_URL);
      setDescripcion(response.data.descripcion);

    } catch (error) {
      console.log("Se produjo un error");
    }
  };*/

  const agregarComentario = async (e) => {
    e.preventDefault();
    console.log(storedUser.id);

    console.log(idPublicacion)
    console.log(JSON.stringify({ fecha: fecha_registro, "idPublicacion": {
      "id": intId}, "idUsuario": {
        "id": storedUser.id}, texto: textoComentario
  }));
    try {
      const response = await axios.post(SEARCH_URL_POST_COMENTARIO,
        JSON.stringify({ fecha: fecha_registro, "idPublicacion": {
          "id": intId}, "idUsuario": {
            "id": storedUser.id}, texto: textoComentario
      }),
        {
          headers: { "Content-Type": "application/json" },
        });
      console.log(JSON.stringify(response.data));
      setTextoComentario("");
      fetchData();

    } catch (error) {
      console.log("Se produjo un error");
    }
  };

  const agregarSeguidor = async (e) => {
    e.preventDefault();
    try {
      const responseSeguido = await axios.get(SEARCH_URL_PUBLICACION);
      console.log(JSON.stringify(responseSeguido.data));
      const idUsuario = responseSeguido.data.id_usuario.id;

      const responseSeguidor = await axios.post(SEARCH_URL_POST_SEGUIDOR,
        JSON.stringify({ fechaSeguimiento: fecha_registro, seguido: {
          id: idUsuario}, seguidor: {
            id: storedUser.id}
      }),
        {
          headers: { "Content-Type": "application/json" },
        });

        console.log(responseSeguidor.data);
        window.alert(`Has Seguido a ${responseSeguido.data.id_usuario.nombre}`);
        
    } catch (error) {
      if (error.response && error.response.status === 409) {
        window.alert("Ya sigues a este usuario");
      } else {
        console.log("Se produjo un error");
      }
    }
  };

  return (
    <div className="card my-4">
    <div className="card-header d-flex align-items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
        alt="Foto de perfil del usuario"
        className="rounded-circle me-2"
        style={{ width: '30px', height: '30px' }}
      />
      <span>{nombreUsuario}</span>
      <button className="btn btn-primary ms-auto" onClick={agregarSeguidor}>Seguir Usuario</button>
    </div>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <img src={imagenURL} alt="Imagen" className="card-img-top img-fluid d-block mx-auto" />
      <h6 className="text-muted">Descripción</h6>
      <p className="card-text">{descripcion}</p>
      <div className="comments-container">
        <h6 className="text-muted">Comentarios</h6>
        {comentarios.map((comentario, index) => (
          <div key={index} className="d-flex align-items-start mt-3">
            <img
                src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
                alt="Foto de perfil del usuario"
                className="rounded-circle me-2"
                style={{ width: '30px', height: '30px' }}
              />
              <div>
                <p className="m-0">{comentario.texto}</p>
                <small className="text-muted">{comentario.idUsuario.nombre}</small>
              </div>
          </div>
        ))}
      </div>
      <div className="input-group mt-3">
        <input type="text" className="form-control"value={textoComentario} onChange={(e) => setTextoComentario(e.target.value)} placeholder="Escribe un comentario" />
        <button className="btn btn-primary" onClick={agregarComentario}>Enviar</button>
      </div>
    </div>
  </div>
);
};



export default Publicacion;
