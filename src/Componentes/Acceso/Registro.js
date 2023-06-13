import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_ ]{3,24}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registro = () => {

    const [nombre, setNombre] = useState('');
    // eslint-disable-next-line
    const [validName, setValidName] = useState(false);

    const [contrasena, setContrasena] = useState('');
    // eslint-disable-next-line
    const [validContrasena, setValidContrasena] = useState(false);
    
    const [correo, setCorreo] = useState('');

    const [errMsg, setErrMsg] = useState('');
    // eslint-disable-next-line
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    var fecha_registro = new Date().toISOString().slice(0, 19); 

    useEffect(() => {
        setValidName(USER_REGEX.test(nombre));
    }, [nombre])

    useEffect(() => {
        setValidContrasena(PWD_REGEX.test(contrasena));
    }, [contrasena])

    useEffect(() => {
        setErrMsg('');
    }, [nombre, contrasena, correo])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(nombre);
        console.log("Nombre: " + v1);
        const v2 = PWD_REGEX.test(contrasena);
        console.log("Clave: " + v2);
        if (!v1 || !v2) {
            window.alert("Entrada Invalida")
            return;
        }
        try {
            const response = await axios.post("http://localhost:8080/PicWiz/api/apiusuario/usuario/registrar",
                JSON.stringify({ contrasena, correo, fecha_registro, nombre }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            
            console.log(JSON.stringify(response?.data));
            
            setSuccess(true);
            setNombre('');
            setContrasena('');
            setCorreo('');
            
            navigate("/perfil");

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            window.alert(errMsg);
        }
    }

  return (
    <div class="container py-5 h-50">
      <div class="col text-center">
        <h1>Registrarse</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div class="d-flex flex-row align-items-center mb-4">
        <div class="form-outline flex-fill mb-0">
            <label htmlFor="nombre">Nombre:</label>
            <input
              onChange={(e) => setNombre(e.target.value)}
              class="form-control"
              type="text"
              id="nombre"
              value={nombre}
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
          <button type="button" class="btn btn-primary btn-lg" onClick={handleSubmit}>Registrar</button>
        </div>

      </form>
    </div>
  );
};

export default Registro;