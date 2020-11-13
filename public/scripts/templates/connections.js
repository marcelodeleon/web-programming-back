import { html } from 'https://unpkg.com/lit-html?module';

const connections = () => {
  return html`
    <style>
      .container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: flex-start;
        align-items: stretch;
      }

      .left_container {
        order: 0;
        flex: 0 1 auto;
        align-self: center;
      }

      .right_container {
        order: 0;
        flex: 0 1 auto;
        align-self: center;
      }

      .arrow {
        height: 40px;
        width: 40px;
        font-weight: bold;
        font-size: medium;
      }

      .tittle {
        font-weight: bold;
        text-align: center;
      }

      .image {
        margin: 15px;
        margin-top: 0px;
        border-radius: 5%;
      }

      .description {
        border-radius: 3%;
        width: 400px;
        height: auto;
        padding: 15px;
        background-color: #bf9663;
      }

      .buttons_container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: center;
        align-items: stretch;
      }

      .btn {
        margin: 15px;
        margin-left: 40px;
        margin-right: 40px;
        height: 50px;
        width: 130px;
        font-weight: bold;
        font-size: medium;
      }

      .connTittle {
        margin-left: 10px;
      }

      .connContainer {
        padding: 10px;
        text-align: left;

        background-color: #527af2;
        height: 800px;
        border-radius: 10px;
      }

      .connProdPhoto {
        border-radius: 10px;

        margin: 10px;
      }

      .connProdTittle {
        font-weight: bold;
      }

      .connection {
        border-style: inset;
        margin: 10px;
        padding: 10px;
        height: 260px;
      }
    </style>
    <h1 class="connTittle">Tus conexiones:</h1>
    <div class="connContainer">
      <div class="connection">
        <h2 class="connProdTittle">Bicicleta GT R26 - Poco uso</h2>

        <img
          class="connProdPhoto"
          src="https://farm6.staticflickr.com/5104/5608004353_3fc49c27d2_b.jpg"
          alt="product photo"
          width="175"
          height="175"
          align="right"
        />

        <p class="connProdDescription">
          Muy poco uso y funcionando en perfecto estado.
        </p>

        <h2 class="connProdTittle">Propietario: Oscar Lopez</h2>
        <p>091 686 889</p>
        <p>oscarelLopez@gmail.com</p>
      </div>
      <div class="connection">
        <h2 class="connProdTittle">Bicicleta GT R26 - Poco uso</h2>

        <img
          class="connProdPhoto"
          src="https://farm6.staticflickr.com/5104/5608004353_3fc49c27d2_b.jpg"
          alt="product photo"
          width="175"
          height="175"
          align="right"
        />

        <p class="connProdDescription">
          Muy poco uso y funciddddddddddddddddddddddddddddddddddddd
          ddddddddddddddddddd dddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddonando en descripcion
          largaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaa perfecto estado.
        </p>

        <h2 class="connProdTittle">Propietario: Oscar Lopez</h2>
        <p>091 686 889</p>
        <p>oscarelLopez@gmail.com</p>
      </div>
    </div>
  `;
};
export default connections;
