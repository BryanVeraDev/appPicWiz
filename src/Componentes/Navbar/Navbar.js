import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-results/${searchQuery}`);
    //navigate(`/search-results`,  {state: searchQuery });
  };



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
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>
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