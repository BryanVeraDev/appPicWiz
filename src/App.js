import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Componentes/Navbar/Navbar";
import NotFound from "./Componentes/NotFound/NotFound";
import Registro from "./Componentes/Acceso/Registro";
import PerfilUsuario from "./Componentes/Usuario/PerfilUsuario";
import MisComentarios from "./Componentes/OpcionesUsuario/Comentarios/MisComentarios";
import MisPublicaciones from "./Componentes/OpcionesUsuario/Publicaciones/MisPublicaciones";
import Publicacion from "./Componentes/Publicacion/Publicacion";
import Publicaciones from "./Componentes/Publicacion/Publicaciones";
import SubirPost from "./Componentes/Publicacion/Subir-Post";
import FiltrarPost from "./Componentes/BusquedaPublicaciones/BusquedaPost";
import { PublicRoutes } from "./routes/routes";
import AuthGuard from "./guards/auth.guard";
import { Provider } from "react-redux";
import store from "./redux/store";

const Login = lazy(() => import('./Componentes/Acceso/Login'));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Navigate to = {PublicRoutes.LOGIN}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="*" element={<NotFound />} />
              <Route element={<AuthGuard />}>
                <Route path="/perfil" element={<PerfilUsuario />} />
                <Route path="/miscomentarios" element={<MisComentarios />} />
                <Route path="/mispublicaciones" element={<MisPublicaciones />} />
                <Route path="/publicacion/:id" element={<Publicacion />} />
                <Route path="/publicaciones" element={<Publicaciones />} />
                <Route path="/subir-post" element={<SubirPost />} />
                <Route path="/search-results/:searchQuery"element={<FiltrarPost />}/>
              </Route>
            </Routes>
          </Router>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
