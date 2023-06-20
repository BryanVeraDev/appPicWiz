import React, { useEffect, useState } from "react";
import axios from "axios";
import TablaComentario from "./TablaComentarios";
import ModalComentario from './ModalComentario'

const MisComentarios = () => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [lComentario, setLComentario] = useState([]);
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
            url: `http://localhost:8080/PicWiz/api/apicomentario/comentario/idusuario/${storedUser.id}`,
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

  const deleteComentario = async (id)  => { 
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el comentario con el id '${id}'?`
    );
    if (isDelete){
      try {
          await axios.delete(
            `http://localhost:8080/PicWiz/api/apicomentario/comentario/${id}`
          );
          console.log("si");
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchData();
  };

  const editarComentario = async (id) => {
    console.log(id);
    setLoading(true);
    await editarCargar(id);
    console.log(lComentario);
    setLoading(false);
    setShow(true);    
  };

  const editarCargar = async (id) => {
    console.log(id);    
    try{
        const response = await axios ({
            url: `http://localhost:8080/PicWiz/api/apicomentario/comentario/${id}`
        });
        setLComentario(response.data);
        console.log("si");
    } catch(error){
        console.log(error);
    }
};

  const modificarComentario = async (newComentario)  =>  { 
    console.log("Loading...");
      try {
      await axios.put(
        "http://localhost:8080/PicWiz/api/apicomentario/comentario",newComentario,{
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
        <ModalComentario show={show} com={lComentario} handleClose={() => setShow(false)}  modificarComentario={modificarComentario}/>    
        <TablaComentario data = {list}  deleteComentario = {deleteComentario } editarComentario={editarComentario} loading={loading}/> 
    </div>
    );
};



export default MisComentarios;