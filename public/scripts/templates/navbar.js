import { html } from 'https://unpkg.com/lit-html?module';
import { logOut } from '../services/auth.js';

const navbar = () => html`
  <style>
    body {
      font-family: monospace;
      margin: 0;
      background: #dedede;
    }

    #menu {
      background: #446ff2;
      color: #f2f2f2;
      height: 45px;
      padding-left: 18px;
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

    button {
      display: block;
      text-align: center;
      background-color: #0095eb;
      padding: 10px 45px 10px 45px;
      border: 0;
      font-size: 1em;
      color: white;
      font-family: 'Roboto', sans-serif;
    }
  </style>

  <nav id="menu">
    <ul>
      <li><a href="/" @click=${logOut}>Log Out</a></li>
      <li><a href="/profile">Perfil</a></li>
      <li><a href="/products">Productos</a></li>

      <li><a href="/connections">Conexiones</a></li>
      <li><a href="/">Explorar</a></li>
    </ul>
  </nav>
`;

export default navbar;
