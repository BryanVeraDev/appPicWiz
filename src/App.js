import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Login from './Componentes/Acceso/Login';
import Registro from './Componentes/Acceso/Registro';
import PerfilUsuario from './Componentes/Usuario/PerfilUsuario';
import Publicacion from './Componentes/Publicacion/Publicacion';
import SubirPost from './Componentes/Publicacion/Subir-Post';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path="/registro" element={<Registro/>} />
          <Route path="/perfil" element={<PerfilUsuario/>} />
          <Route path="/publicacion/:id" element={<Publicacion/>} />
          <Route path="/subir-post" element={<SubirPost/>} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
