import { html } from 'https://unpkg.com/lit-html?module';
import refresh from '../utils/refresh.js';
import { addOffer } from '../services/offers.js';

let photosCounter = 0;
let loading = false;

const myProducts = ['Lote de libros', 'Silla de escritorio', 'Bicicleta R20'];

  // Objetc for testing
  const objProduct = {};
  objProduct.name = 'Guitarra Criolla Fender!';
  objProduct.photos = [
    'https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e8/Classical_Guitar_two_views.jpg',
  ];
  objProduct.descrption =
    'Excelente sonido. Afina bien y está en muy buen estado. Solo tiene un detalle que se aprecia en la última foto, pero no afecta ni el sonido ni el funcionamiento de la misma.';

const home = () => {
  const handlerDoOffer = async (event) => {
    loading = true;
    refresh();
    event.preventDefault();

    
    /* To get the selected product in dropdown */
    let combo = document.getElementById("producto");
    let selected = combo.options[combo.selectedIndex].text;

    /* Data to build the offer*/
    const offeredProductname = selected;
    const wantedProductname = objProduct.name;
    const offeredProductDescription = objProduct.descrption;
    const email = "soldado@gmail.com"; //Se debe cargar el mail del usuario logeado
    const fullName = "nombre soldado";//Se debe cargar el nombre del usuario logeado
    const phone = "123 456 789"; //Se debe cargar el nombre del usuario logeado
    const offeredProductPhotos = [
      'https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Classical_Guitar_two_views.jpg',
    ];//Se debe cargar las fotos del producto ofertado 

    try {
      await addOffer({offeredProductname, wantedProductname, offeredProductDescription, offeredProductPhotos, contactInformation:{email,fullName, phone} });
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
      refresh();
    }
  }

  function handlerDiscard() {
    console.log('Descartar producto, cargar siguiente');
  }


  function handlerPreviusPhoto() {
    if (objProduct.photos[photosCounter - 1]) {
      photosCounter -= 1;
      refresh();
    }
  }
  function handlerNextPhoto() {
    if (objProduct.photos[photosCounter + 1]) {
      photosCounter += 1;
      refresh();
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
        background-color: #a5a5a5;
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
        margin: 15px;
        padding: 10px;
        border-style: solid;
        border-color: #bc5242;
      }
      .btnOffer {
        margin-top: 10px;
      }

      .photosCounter {
        text-align: center;
      }
    </style>

    <div class="container">
      <div class="left_container">
        <button class="arrow" type="button" @click="${handlerPreviusPhoto}">
          &#x3C;
        </button>
      </div>

      <div class="center_container">
        <div class="tittle">
          <p>${objProduct.name}</p>
        </div>

        <img
          class="image"
          src=${objProduct.photos[photosCounter]}
          alt="product"
          height="400"
          width="400"
        />
        <p class="photosCounter">
          Foto: ${photosCounter + 1}/${objProduct.photos.length}
        </p>
        <div class="description">
          <p>${objProduct.descrption}</p>
        </div>

        <div class="myProducts_container">
          <p>Elige cuál producto deseas ofrecer a cambio</p>
          <select name="objProduct" id="producto">
            ${myProducts.map((p) => html`<option value="p">${p}</option>`)}
          </select>
          <br />
        </div>

        <div class="buttons_container">
          <button class="btn offer" type="button" @click="${handlerDoOffer}">
          ${loading ? 'Loading...' : 'Ofertar'}
          </button>
          <button class="btn reject" type="button" @click="${handlerDiscard}">
            Descartar
          </button>
        </div>
      </div>

      <div class="right_container">
        <button class="arrow" type="button" @click="${handlerNextPhoto}">
          &#x3E;
        </button>
      </div>
    </div>
  `;
};
export default home;
