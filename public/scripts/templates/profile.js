import { html } from 'https://unpkg.com/lit-html?module';

const profile = () => {
  return html` <style>
      #menu {
        background: #446ff2;
        color: #f2f2f2;
        height: 45px;
        padding-left: 18px;
        border-radius: 10px;
      }
      #menu ul,
      #menu li {
        margin: 0 auto;
        padding: 0;
        list-style: none;
      }
      #menu ul {
        width: 100%;
      }
      #menu li {
        float: right;
        display: inline;
        position: relative;
      }
      #menu a {
        display: block;
        line-height: 45px;
        padding: 0 14px;
        text-decoration: none;
        color: #f2f2f2;
        font-size: 16px;
      }

      #menu li a:hover {
        color: #446ff2;
        background: #f2f2f2;
      }
      #menu input {
        display: none;
        margin: 0;
        padding: 0;
        height: 45px;
        width: 100%;
        opacity: 0;
        cursor: pointer;
      }
      #menu label {
        display: none;
        line-height: 45px;
        text-align: center;
        position: absolute;
        left: 35px;
      }

      .Container {
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
    <nav id="menu">
      <ul>
        <li><a href="http://">Perfil</a></li>
        <li><a href="http://">Producto</a></li>
        <li><a href="http://">Conexiones</a></li>
        <li><a href="http://">Explorar</a></li>
      </ul>
    </nav>
    <div class="Container">
      <h1 class="Name">Nombre de Usuario</h1>
      <h2 class="Name">Pais</h2>
      <img
        class="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2jvo13VhSfAGtdAUYVbcRco2WN9Uu8WXhQA&usqp=CAU"
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
