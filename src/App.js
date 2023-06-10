import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Login from './Componentes/Acceso/Login';
import Registro from './Componentes/Acceso/Registro';
import PerfilUsuario from './Componentes/Usuario/PerfilUsuario';
import Publicacion from './Componentes/Publicacion/Publicacion';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path="/registro" element={<Registro/>} />
          <Route path="/perfil" element={<PerfilUsuario/>} />
          <Route path="/publicacion/:id" element={<Publicacion/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
