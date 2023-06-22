import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../Acceso/Logout";
import SubirPost from "../Publicacion/Subir-Post";


const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search-results/${searchQuery}`);
    }
  };


  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid bg-light bg-opacity-75">
        <Link className="navbar-brand" to="/publicaciones">
          PicWiz
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </form>

        <ul className="navbar-nav ml-auto">
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button
                  class="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Perfil
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/#">
                      <Link to="/perfil" class="nav-link active" href="#">
                        Mi Perfil
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      <Link
                        to="/mispublicaciones"
                        class="nav-link active"
                        href="#"
                      >
                        Mis Publicaciones
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      <Link
                        to="/miscomentarios"
                        class="nav-link active"
                        href="#"
                      >
                        Mis Comentarios
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <li className="nav-item">
            <button
              type="button"
              class="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              
            >
              Subir Post
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <SubirPost/>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Logout />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
