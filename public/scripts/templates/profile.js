import { html } from 'https://unpkg.com/lit-html?module';

const profile = () => {
  return html` <style>
      .Container {
        margin: 30px 50px;
        text-align: center;
        border-style: solid;
        padding: 30px;
      }
      .Name {
        font-size: medium;
      }
      .Info {
        font-size: medium;
        text-align: left;
      }
      .Editar {
        font-size: medium;
        text-align: center;
      }
    </style>

    <div class="Container">
      <h1 class="Name">Nombre de Usuario</h1>
      <h2 class="Name">Pais</h2>
      <img
        class="image"
        src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png"
        alt="product"
        height="200"
        width="200"
      />
      <h3 class="Info">Email</h3>
      <h3 class="Info">Telefono de Contacto</h3>
      <h3 class="Info">Horario de Contacto</h3>
      <h3 class="Info">Calificacion</h3>

      <button class="Editar">Editar Perfil</button>
    </div>`;
};
export default profile;
