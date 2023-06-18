import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import CardPublicacion from "../Publicacion/CardPublicacion";

const FiltrarPost = () => {

    const [list, setList] = useState([]);
    const [errMsg, setErrMsg] = useState("");
    const searchQuery = useParams().searchQuery;

    console.log(searchQuery);

    useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await axios ({
                url: `http://localhost:8080/PicWiz/api/apipublicacion/publicacion/filtro/${searchQuery}`,
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
    }, [searchQuery,setList, errMsg]);

  return(
    <div class="container-fluid">
        <CardPublicacion data = {list} /> 
    </div>
  );

};

export default FiltrarPost;