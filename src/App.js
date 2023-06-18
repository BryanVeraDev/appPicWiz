import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Login from './Componentes/Acceso/Login';
import Registro from './Componentes/Acceso/Registro';
import PerfilUsuario from './Componentes/Usuario/PerfilUsuario';
import Publicacion from './Componentes/Publicacion/Publicacion';
import SubirPost from './Componentes/Publicacion/Subir-Post';
import FiltrarPost from './Componentes/BusquedaPublicaciones/BusquedaPost';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar si hay un usuario almacenado en localStorage al cargar la aplicación
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    // Guardar el usuario en localStorage al iniciar sesión
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  };


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin}/>}> </Route>
          <Route path="/registro" element={<Registro/>} />
          <Route path="/perfil" element={<PerfilUsuario user={user}/>} />
          <Route path="/publicacion/:id" element={<Publicacion user={user}/>} />
          <Route path="/subir-post" element={<SubirPost/>} />
          <Route path="/search-results/:searchQuery" element={<FiltrarPost/>} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
