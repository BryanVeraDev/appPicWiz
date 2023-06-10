import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  
  const handleRegistro =  (e) => {
    e.preventDefault();

  };

    // Simulación de registro exitoso
    /*const isRegistered = true;

    if (isRegistered) {
      // Redirige a la página de perfil si el registro es exitoso
      navigate('/perfil');
    } else {
      // Manejo de error en caso de fallo en el registro
    }*/
  

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegistro}>
      <div class="d-flex flex-row align-items-center mb-4">
        <div class="form-outline flex-fill mb-0">
            <label htmlFor="nombre">Nombre:</label>
            <input
              class="form-control"
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
           />
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <div class="form-outline flex-fill mb-0">
            <label htmlFor="correo">Correo:</label>
            <input
              class="form-control"
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <div class="form-outline flex-fill mb-0">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              class="form-control"
              type="password"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
        </div>

        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate('/perfil')}>Registrar</button>
        </div>

      </form>
    </div>
  );
};

export default Registro;