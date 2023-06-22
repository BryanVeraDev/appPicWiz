import React, {useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalUsuario = ({ show, handleClose, user}) => {

  const [newUsuario, setUsuario] = useState({titulo: '', fecha_publicacion: '', id: '', descripcion: '', imagen_URL: '', id_usuario: {id: '', nombre: ''}});
  useEffect(() => {
    if(show){
      setUsuario(user);
    }
  }, [show, user]);

  const handleInputChange = (e) => {
    setUsuario({ ...newUsuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuario({ texto: '', fecha: '', id: '', idPublicacion: {id: ''}, idUsuario: {id: ''} });
    handleClose();
  };

    return (
        <>
         
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Datos Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <section className='section'>
      <div className='container'>
        <div className='card shadow'>
          <div className='card-body'>
            <div className='row'>
            <form onSubmit={handleSubmit}>
            <hr />
              <label className="mb-1">Id</label>
                  <input
                    readOnly
                    type="text"
                    className='form-control'
                    name="id"
                    value={newUsuario.id}
                    onChange={handleInputChange}
                    placeholder="ID"
                  />
                  <label className="mb-1">Nombre</label>
                  <input
                    readOnly
                    type="text"
                    className='form-control'
                    name="nombre"
                    value={newUsuario.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                  />
                  <label className="mb-1">Correo</label>
                  <input
                    readOnly
                    type="text"
                    className='form-control'
                    name="correo"
                    value={newUsuario.correo}
                    onChange={handleInputChange}
                    placeholder="Correo"
                  />
                  <label className="mb-1">Fecha Registro</label>
                  <input
                    readOnly
                    type="text"
                    className='form-control'
                    name="fecha"
                    value={newUsuario.fecha_registro}
                    onChange={handleInputChange}
                    placeholder="Fecha Registro"
                  />
                   <hr/>
                </form>
              </div>
            </div>
          </div>
      </div>
    </section>
    </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ModalUsuario;