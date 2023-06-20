import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPublicacion from "../Publicacion/CardPublicacion";

const Publicacion = () => {
    const [list, setList] = useState([]);
    const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try{
          const response = await axios ({
              url: `http://localhost:8080/PicWiz/api/apipublicacion/publicacion`,
          });
          setList(response.data);
          console.log(response.data);
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

      fetchData();
  }, [setList, errMsg]);

    // Ordenar las publicaciones por fecha de forma descendente
    const sortedList = list.sort((a, b) => 
    new Date(b.id) - new Date(a.id));

  // Obtener las últimas 20 publicaciones
  const latestPublicaciones = sortedList.slice(0, 15)

  return (
    <div class="container-fluid">
        <CardPublicacion data = {latestPublicaciones} /> 
    </div>
    );
};



export default Publicacion;