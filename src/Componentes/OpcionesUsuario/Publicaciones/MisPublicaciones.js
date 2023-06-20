import React, { useEffect, useState } from "react";
import axios from "axios";
import TablaPublicaciones from "./TablaPublicaciones";
import ModalComentario from './ModalPublicacion'

const MisComentarios = () => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [lPublicacion, setLPublicacion] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const storedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
      fetchData();
      // eslint-disable-next-line
  }, [setList, errMsg]);

  const fetchData = async () => {
    try{
        const response = await axios ({
            url: `http://localhost:8080/PicWiz/api/apipublicacion/publicacion/idusuario/${storedUser.id}`,
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


  const editarPublicacion = async (id) => {
    console.log(id);
    setLoading(true);
    await editarCargar(id);
    setLoading(false);
    setShow(true);    
  };

  const editarCargar = async (id) => {
    console.log(id);    
    try{
        const response = await axios ({
            url: `http://localhost:8080/PicWiz/api/apipublicacion/publicacion/${id}`
        });
        setLPublicacion(response.data);
        console.log("si");
    } catch(error){
        console.log(error);
    }
};

  const modificarPublicacion = async (newPublicacion)  =>  { 
    console.log("Loading...");
      try {
      await axios.put(
        "http://localhost:8080/PicWiz/api/apipublicacion/publicacion",newPublicacion,{
            headers: {
              'Content-Type': 'application/json',
            },
                
        });
     } catch (error) {
      console.log(error);
    }
  

  fetchData();
  };

  return (
    <div class="container-fluid">
        <ModalComentario show={show} pub={lPublicacion} handleClose={() => setShow(false)}  modificarPublicacion={modificarPublicacion}/>    
        <TablaPublicaciones data = {list}  editarPublicacion={editarPublicacion} loading={loading}/> 
    </div>
    );
};



export default MisComentarios;