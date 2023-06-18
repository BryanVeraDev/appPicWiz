import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

const Login = ({ onLogin }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errMsg, setErrMsg] = useState("");

  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(  
        "http://localhost:8080/PicWiz/api/apiusuario/usuario/ingresar/login",
        JSON.stringify({ correo, contrasena }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      const token = response.headers.get('Authorization');
      console.log(response.headers.get('Authorization'));
      localStorage.setItem('accessToken', token);

      const userData = {
        contrasena: response.data.contrasena,
        correo: response.data.correo,
        fecha_registro: response.data.fecha_registro,
        id: response.data.id,
        nombre: response.data.nombre,
      };

      onLogin(userData);

      navigate('/perfil', { state: { user: {
        contrasena: response.data.contrasena,
        correo: response.data.correo,
        fecha_registro: response.data.fecha_registro,
        id: response.data.id,
        nombre: response.data.nombre
      }}});

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 404) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      window.alert(errMsg);
    }

  };

  return (
    <div class="container py-5 h-50">
      <div class="col text-center">
        <h1>Iniciar Sesion</h1>
      </div>
      <form onSubmit={handleLogin}>
        <div class="form-outline mb-4">
        <label class="form-label" for="Username">Usuario:</label>
          <input
            class="form-control form-control-lg"
            type="email"
            id="username"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          
        </div>
        <div class="form-outline mb-4">
          <label htmlFor="password">Contraseña:</label>
          <input
            class="form-control form-control-lg"
            type="password"
            id="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <div class="col text-center mb-4">
          <button type="submit" class="btn btn-primary btn-lg" onClick={handleLogin}>Sign in</button>
        </div>

        <div class="col text-center">
          <a href="#!">¿Olvidó la contraseña?</a>
        </div>

      </form>

      <div class="text-center">
        <p>No eres usuario <Link to="/registro">Registrate</Link></p>
      </div>
    </div>
    
  );
};

export default Login;