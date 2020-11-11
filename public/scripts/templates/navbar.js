import { html } from 'https://unpkg.com/lit-html?module';
import { logOut } from '../services/auth.js';

const navbar = () => html`
  <nav id="menu">
    <ul>
      <li><a href="/home">Explorar</a></li>
      <li><a href="/product">Producto</a></li>
      <li><a href="#">Perfil</a></li>
      <li><a href="#">Conexiones</a></li>
      <li><a href="#" @click=${logOut}>Log Out</a></li>
    </ul>
  </nav>
`;

export default navbar;
