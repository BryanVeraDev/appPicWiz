import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          PicWiz
        </Link>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button className="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link className="nav-link btn btn-primary" to="/perfil">
              Perfil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-primary" to="/subir-post">
              Subir Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;