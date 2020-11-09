import { html } from 'https://unpkg.com/lit-html?module';

const register = () => {
  return html`
    <style>
      body {
        font-family: monospace;

        background: #dedede;
      }

      .container-register {
        margin-top: 15vh;
        margin-left: 30%;
        width: 40%;
        height: 70vh;
        background: #a5a5a5;
        border-radius: 2%;
        padding: 15px;
      }

      .container-form {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
      }

      form input,
      form textarea {
        margin-bottom: 15px;
        width: 100%;
        padding: 10px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: none;
        color: #525c66;
        font-size: 1em;
        resize: horizontal;
      }

      form button {
        display: block;
        background-color: #0095eb;
        padding: 10px 45px 10px 45px;
        border: 0;
        font-size: 1em;
        color: white;
        font-family: 'Roboto', sans-serif;
      }
    </style>

    <div class="container-register">
      <h2>¡&Uacute;nete y empieza a intercambiar productos!</h2>
      <form method="post">
        <input
          name="nombre"
          type="text"
          placeholder="Nombre"
          maxlength="30"
          required
          autofocus
        />
        <input
          name="apellido"
          type="text"
          placeholder="Apellido"
          maxlength="30"
          required
          autofocus
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electr&oacute;nico"
          required
        />
        <input
          name="contraseña"
          type="password"
          placeholder="Contraseña"
          maxlength="30"
          required
          autofocus
        />
        <input
          name="confcontraseña"
          type="password"
          placeholder="Confirmar Contraseña"
          maxlength="30"
          required
          autofocus
        />
        Opcional:
        <input
          name="telefono"
          type="text"
          placeholder="Teléfono"
          maxlength="30"
          autofocus
        />
        <button id="enviar" name="enviar" type="submit">Registrarme</button>
      </form>
    </div>
  `;
};
export default register;
