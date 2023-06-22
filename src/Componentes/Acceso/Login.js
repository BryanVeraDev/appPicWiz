import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/state/user";
import "./login.css";

const Login = ({ onLogin }) => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

      const token = response.headers.get("Authorization");
      localStorage.setItem("accessToken", token);

      dispatch(createUser(response.data));
      navigate("/publicaciones");
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
    <div class="container-fluid text-center bg-success bg-opacity-50 h-100">
      <div class="row vh-100 justify-content-center align-items-center">
        <div class="col">
          <h1 class="pic animate__animated animate__bounce">PicWiz</h1>
          <h2 class="textoP animate__animated animate__fadeIn">¡Comparte tus experiencia con otras personas!</h2>
        </div>
        <div class="col-auto  shadow bg-light mx-4 rounded w-50 h-80 py-3 animate__animated animate__bounce">
          <h1>Iniciar Sesión</h1>

          <form onSubmit={handleLogin}>
            <div class="form-outline mb-4">
              <label class="form-label" for="Username"></label>
              <input
                placeholder="Usuario"
                class="form-control form-control-lg"
                type="email"
                id="username"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div class="form-outline mb-4">
              <label htmlFor="password"></label>
              <input
                placeholder="Contraseña"
                class="form-control form-control-lg"
                type="password"
                id="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>

            <div class="col text-center mb-4">
              <button
                type="submit"
                class="btn btn-outline-success"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </form>

          <div class="text-center">
            <p>
              No eres usuario{" "}
              <Link to="/registro" className="text-success">
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
