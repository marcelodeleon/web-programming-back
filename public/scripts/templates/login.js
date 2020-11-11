import { html } from 'https://unpkg.com/lit-html?module';

const login = () => {
  return html`
    <style>
      .pageContainer {
        text-align: center;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
      }

      .login-container {
        background-color: rgb(65, 116, 116);
        margin-top: 15%;
        align-self: auto;
        padding: 40px;
        border-radius: 15px;
      }

      .login-container input {
        margin: 5px;
        height: 30px;
        width: 300px;
      }

      .login-container button {
        margin-top: 15px;
      }
      .login-container h5 {
        float: left;
      }
    </style>
    <div class="pageContainer">
      <div class="login-container">
        <input type="text" name="user" placeholder="Usuario" />
        <br />
        <input type="text" name="user" placeholder="Contrase&ntilde;a" />
        <br />
        <button>Ingresar</button>
        <br />
        <h5>
          No tienes cuenta?
          <a href="http://" target="_blank">Regístrate! </a> Olvidaste tu
          contraseña? <a href="http://" target="_blank">Recuperar </a>
        </h5>
      </div>
    </div>
  `;
};
export default login;
