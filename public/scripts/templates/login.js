import { html } from 'https://unpkg.com/lit-html?module';

const login = () => {
  return html`
    <style>
      /* Color Theme Swatches in Hex */
      .Attune---creative-agency-1-hex {
        color: #446ff2;
      }
      .Attune---creative-agency-2-hex {
        color: #527af2;
      }
      .Attune---creative-agency-3-hex {
        color: #5c8ef2;
      }
      .Attune---creative-agency-4-hex {
        color: #bf9663;
      }
      .Attune---creative-agency-5-hex {
        color: #f2f2f2;
      }

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
          No tienen cuenta?
          <a href="http://" target="_blank">Regístrate! </a> Olvidaste tu
          contraseña? <a href="http://" target="_blank">Recuperar </a>
        </h5>
      </div>
    </div>
  `;
};
export default login;
