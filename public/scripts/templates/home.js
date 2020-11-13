import { html } from 'https://unpkg.com/lit-html?module';

const home = () => {
  let showOfferDiv = 'block';

  function viewOfferHandler() {
    // Cambia la propiedad pero no actualiza el DOM
    console.log(showOfferDiv);
    if (showOfferDiv === 'block') {
      showOfferDiv = 'none';
    } else {
      showOfferDiv = 'block';
    }
  }

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
        font-size: 3vh;
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
      .myProducts_container {
        display: ${showOfferDiv};
        background-color: darkgray;
        padding: 10px;
        border-radius: 5px;
      }
      .btnOffer {
        margin-top: 10px;
      }
    </style>

    <div class="container">
      <div class="left_container">
        <button class="arrow" type="button" formtarget="_self">&#x3C;</button>
      </div>

      <div class="center_container">
        <div class="tittle">
          <p>Guitarra criolla Fender! Poco uso</p>
        </div>

        <img
          class="image"
          src="https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg"
          alt="product"
          height="400"
          width="400"
        />

        <div class="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="buttons_container">
          <button
            class="btn connect"
            type="button"
            @click="${viewOfferHandler}"
          >
            Ofertar
          </button>
          <button class="btn reject" type="button" formtarget="_self">
            Descartar
          </button>
        </div>

        <div class="myProducts_container">
          <p>Elige cuál producto deseas ofrecer a cambio</p>

          <select name="myProduct">
            <option>Bicicleta R20 como nueva</option>

            <option>Lote de libros</option>

            <option selected>Silla de escritorio</option>
          </select>
          <br />
          <button class="btnOffer" type="button" formtarget="_self">
            Realizar oferta!
          </button>
        </div>
      </div>

      <div class="right_container">
        <button class="arrow" type="button" formtarget="_self">&#x3E;</button>
      </div>
    </div>
  `;
};
export default home;
