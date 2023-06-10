import React from 'react';

const PerfilUsuario = () => {
 


  return (

    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-4">

          <div class="card">
          <div class="card-body text-center">
            <div class="mt-3 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                class="rounded-circle img-fluid"/>
            </div>
            <h4 class="mb-2">Ale Arsenault</h4>
            <p class="text-muted mb-4">@Usuario <span class="mx-2">|</span></p>
            <button type="button" class="btn btn-primary btn-rounded btn-lg">
              Actualizar Perfil
            </button>
            <div class="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p class="mb-2 h5">8471</p>
                <p class="text-muted mb-0">Publicaciones</p>
              </div>
              <div class="px-3">
                <p class="mb-2 h5">8512</p>
                <p class="text-muted mb-0">Seguidores</p>
              </div>
              <div>
                <p class="mb-2 h5">4751</p>
                <p class="text-muted mb-0">Seguidos</p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  </section>
  );
};

export default PerfilUsuario;