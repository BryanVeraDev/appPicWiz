import React, { useState } from 'react';

const SubirPost = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleImagenChange = (e) => {
    // Obtener el archivo de imagen seleccionado por el usuario
    const file = e.target.files[0];
    setImagen(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar el envío del post y la imagen a través de tu API
    // Puedes utilizar la información almacenada en los estados `titulo`, `descripcion` y `imagen`

    // Reiniciar los campos después de enviar el post
    setTitulo('');
    setDescripcion('');
    setImagen(imagen);
    
  };

  return (
    <div class="container py-5 h-50">
      <div class="container-sm">
        <h1>Subir Post</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-outline mb-4">
            <label>Título:</label>
            <input type="text" class="form-control form-control-lg" value={titulo} onChange={handleTituloChange} />
          </div>
          <div class="form-outline mb-4">
            <label>Descripción:</label>
            <textarea value={descripcion} class="form-control form-control-lg" onChange={handleDescripcionChange} />
          </div>
          <div class="form-outline mb-4">
            <label>Imagen:</label>
            <input type="file" accept=".png,.jpg" class="form-control form-control-lg" onChange={handleImagenChange} />
          </div>
          <div class="col text-center">
          <button type="submit" class="btn btn-primary btn-lg">Subir Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubirPost;