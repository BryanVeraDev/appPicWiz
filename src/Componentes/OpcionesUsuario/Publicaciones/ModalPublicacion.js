import React, {useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalPublicacion = ({ show, handleClose, pub, modificarPublicacion}) => {

  const [newPublicacion, setPublicacion] = useState({titulo: '', fecha_publicacion: '', id: '', descripcion: '', imagen_URL: '', id_usuario: {id: '', nombre: ''}});
  useEffect(() => {
    if(show){
      setPublicacion(pub);
    }
  }, [show, pub]);

  const handleInputChange = (e) => {
    setPublicacion({ ...newPublicacion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modificarPublicacion(newPublicacion);
    setPublicacion({ texto: '', fecha: '', id: '', idPublicacion: {id: ''}, idUsuario: {id: ''} });
    handleClose();
  };

    return (
        <>
         
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Actualización de datos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <section className='section'>
      <div className='container'>
        <div className='card shadow'>
          <div className='card-body'>
            <div className='row'>
            <form onSubmit={handleSubmit}>
            <hr />
              <label className="mb-1">Titulo Publicación</label>
                  <input
                    type="text"
                    className='form-control'
                    name="titulo"
                    value={newPublicacion.titulo}
                    onChange={handleInputChange}
                    placeholder="Titulo"
                  />
                  <label className="mb-1">Descripción Publicacion</label>
                  <input
                    type="text"
                    className='form-control'
                    name="descripcion"
                    value={newPublicacion.descripcion}
                    onChange={handleInputChange}
                    placeholder="Descripción"
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
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ModalPublicacion;