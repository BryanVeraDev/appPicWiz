import React, { useState} from "react";
import axios from "axios";

const SubirPost = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  var fecha_registro = new Date().toISOString().slice(0, 19);
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const agregarPublicacion = async (e) => {
    e.preventDefault();
    console.log(storedUser.id);

    console.log(
      JSON.stringify({
        fecha_publicacion: fecha_registro,
        id_usuario: { id: storedUser.id, nombre: storedUser.nombre },
        descripcion: descripcion,
        titulo: titulo,
        imagen_URL: imagen,
      })
    );

    if (
      titulo.trim() !== "" &&
      descripcion.trim() !== "" &&
      imagen.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:8080/PicWiz/api/apipublicacion/publicacion",
          JSON.stringify({
            fecha_publicacion: fecha_registro,
            id_usuario: { id: storedUser.id, nombre: storedUser.nombre },
            descripcion: descripcion,
            titulo: titulo,
            imagen_URL: imagen,
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(JSON.stringify(response.data));
        setTitulo("");
        setDescripcion("");
        setImagen("");
        window.alert("Se agregó la publicación correctamente");
      } catch (error) {
        console.log("Se produjo un error");
      }
    } else {
      window.alert("Complete todos los campos");
    }
  };

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleImagenChange = (e) => {
    // Obtener el archivo de imagen seleccionado por el usuario
    setImagen(e.target.value);
  };


  return (
    <div class="container text-center">
      <h1>Subir Post</h1>
      <form onSubmit={agregarPublicacion}>
        <div class="form-outline mb-4">
          <input
            placeholder="Título"
            type="text"
            class="form-control form-control-lg"
            value={titulo}
            onChange={handleTituloChange}
          />
        </div>
        <div class="form-outline mb-4">
          <textarea
            placeholder="Descripción"
            value={descripcion}
            class="form-control form-control-lg"
            onChange={handleDescripcionChange}
          />
        </div>
        <div class="form-outline mb-4">
          <input
            placeholder="Url Imagen"
            type="text"
            value={imagen}
            class="form-control form-control-lg"
            onChange={handleImagenChange}
          />
        </div>
        <div class="col text-center">
          <button
            type="submit"
            class="btn btn-primary btn-lg"
            data-bs-dismiss="modal"
            onClick={agregarPublicacion}
          >
            Subir Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubirPost;
