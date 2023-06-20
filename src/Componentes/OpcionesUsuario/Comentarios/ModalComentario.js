import React, {useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalComentario = ({ show, handleClose, com, modificarComentario}) => {

  const [newComentario, setComentario] = useState({texto: '', fecha: '', id: '', idPublicacion: {
    id: ''}, idUsuario: {id: ''}});
  useEffect(() => {
    if(show){
      setComentario(com);
    }
  }, [show, com]);

  const handleInputChange = (e) => {
    setComentario({ ...newComentario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modificarComentario(newComentario);
    setComentario({ texto: '', fecha: '', id: '', idPublicacion: {id: ''}, idUsuario: {id: ''} });
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
              <label className="mb-1">Texto Comentario</label>
                  <input
                    type="text"
                    className='form-control'
                    name="texto"
                    value={newComentario.texto}
                    onChange={handleInputChange}
                    placeholder="Texto"
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

export default ModalComentario;