import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para autenticar al usuario
    // y verificar las credenciales en tu API

    // Simulación de autenticación exitosa
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Redirige a la página de publicaciones si la autenticación es exitosa
      navigate.push('/publicacion');
    } else {
      // Redirige a la página de registro de usuario si la autenticación falla
      navigate.push('/registrar');
    }
  };

  return (
    <div>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
        </div>
        <div class="form-outline mb-4">
          <label htmlFor="password">Contraseña:</label>
          <input
            class="form-control form-control-lg"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="col text-center">
          <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
        </div>

        <div class="col text-center">
          <a href="#!">¿Olvidó la contraseña?</a>
        </div>

      </form>

      <div class="text-center">
        <p>No eres usuario <a href="#!">Registrate</a></p>
      </div>

    </div>
  );
};

export default Login;