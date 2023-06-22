import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./estilo.css";

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_ ]{2,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registro = () => {
  const [nombre, setNombre] = useState("");
  // eslint-disable-next-line
  const [validName, setValidName] = useState(false);

  const [contrasena, setContrasena] = useState("");
  // eslint-disable-next-line
  const [validContrasena, setValidContrasena] = useState(false);

  const [correo, setCorreo] = useState("");

  const [errMsg, setErrMsg] = useState("");
  // eslint-disable-next-line
  const [success, setSuccess] = useState(false);

  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const navigate = useNavigate();

  var fecha_registro = new Date().toISOString().slice(0, 19);

  useEffect(() => {
    setValidName(USER_REGEX.test(nombre));
  }, [nombre]);

  useEffect(() => {
    setValidContrasena(PWD_REGEX.test(contrasena));
  }, [contrasena]);

  useEffect(() => {
    setErrMsg("");
  }, [nombre, contrasena, correo]);

  const toggleMostrarContrasena = (e) => {
    e.preventDefault();
    setMostrarContrasena(!mostrarContrasena);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(nombre);
    console.log("Nombre: " + v1);
    const v2 = PWD_REGEX.test(contrasena);
    console.log("Clave: " + v2);
    if (!v1 || !v2) {
      window.alert("Entrada Invalida");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/PicWiz/api/apiusuario/usuario/registrar",
        JSON.stringify({ contrasena, correo, fecha_registro, nombre }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(JSON.stringify(response?.data));

      setSuccess(true);
      setNombre("");
      setContrasena("");
      setCorreo("");

      navigate("/");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      window.alert(errMsg);
    }
  };

  return (
    <div class="container text-center">
      <div class="row vh-100 justify-content-center align-items-center animate__animated animate__bounce">
        <div class="col-auto  shadow  rounded w-50 h-50">
          <form onSubmit={handleSubmit} class="formulario">
            <div style={{ padding: "3%" }}>
              <h1>Registrarse</h1>
            </div>

            <div class="w-75 mb-2">
              <input
                onChange={(e) => setNombre(e.target.value)}
                class="form-control"
                type="text"
                id="nombre"
                value={nombre}
                placeholder="Nombre"
              />
            </div>

            <div class="w-75 mb-2">
              <input
                class="form-control "
                type="email"
                id="correo"
                value={correo}
                placeholder="Correo"
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div class="w-75 mb-2">
              <input
                class="form-control"
                type={mostrarContrasena ? "text" : "password"}
                id="contrasena"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                placeholder="Contraseña"
              />
            </div>

            <div class=" row w-75">
              <button
                class="btn btn-light mb-2"
                onClick={toggleMostrarContrasena}
                id="mostrarContr"
              >
                {mostrarContrasena ? "Ocultar" : "Mostrar"} contraseña
              </button>

              <button
                type="button"
                class="btn btn-outline-success"
                onClick={handleSubmit}
              >
                Registrar
              </button>
              <div class="text-center mt-3">
                <p>
                  Ya eres usuario{" "}
                  <Link to="/login" className="text-success">
                    Inicia Sesión
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
