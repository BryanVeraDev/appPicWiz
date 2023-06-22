import React, { useState, useEffect } from 'react';
import axios from "axios";
import ModalUsuario from './ModalUsuario'
import {Spinner } from 'react-bootstrap';

const PerfilUsuario = () => {

  const [listPublicaciones, setListPublicaciones] = useState([]);
  const [listSeguidores, setListSeguidores] = useState([]);
  const [listSeguidos, setListSeguidos] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const storedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
      fetchDataPublicaciones();
      fetchDataSeguidores();
      fetchDataSeguidos();
      // eslint-disable-next-line
  }, [setListPublicaciones, setListSeguidores, setListSeguidos, errMsg]);

  const fetchDataPublicaciones = async () => {
    try{
        const response = await axios ({
            url: `http://localhost:8080/PicWiz/api/apipublicacion/publicacion/idusuario/${storedUser.id}`,
        });
        setListPublicaciones(response.data);
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

    const fetchDataSeguidores = async () => {
      try{
          const response = await axios ({
              url: `http://localhost:8080/PicWiz/api/apiseguidor/seguidor/misseguidores/${storedUser.id}`,
          });
          setListSeguidores(response.data);
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

      const fetchDataSeguidos = async () => {
        try{
            const response = await axios ({
                url: `http://localhost:8080/PicWiz/api/apiseguidor/seguidor/misseguidos/${storedUser.id}`,
            });
            setListSeguidos(response.data);
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

        const verDatosUsuario = () => {
          setLoading(true);
          setShow(true); 
          setLoading(false)
        };

  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-4">
            <div class="card">
              <div class="card-body text-center">
                <div class="mt-3 mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
                    alt="Imagen perfil usuario"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <h4 class="mb-2">{storedUser.nombre}</h4>
                <p class="text-muted mb-4">
                  @Usuario
                </p>
                <button 
                type="button" 
                class="btn btn-primary btn-rounded btn-lg" 
                onClick={verDatosUsuario}>
                  {loading && <Spinner animation="border" size="sm" />}
                  Ver Datos Usuario
                </button>
                <div class="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <p class="mb-2 h5">{listSeguidores.length}</p>
                    <p class="text-muted mb-0">Seguidores</p>
                  </div>
                  <div class="px-3">
                    <p class="mb-2 h5">{listPublicaciones.length}</p>
                    <p class="text-muted mb-0">Publicaciones</p>
                  </div>
                  <div>
                    <p class="mb-2 h5">{listSeguidos.length}</p>
                    <p class="text-muted mb-0">Seguidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {show && (
      <div class="container-fluid">
        <ModalUsuario
          show={show}
          user={storedUser}
          handleClose={() => setShow(false)}
        />
      </div>
    )}
    </section>
  );
};

export default PerfilUsuario;
