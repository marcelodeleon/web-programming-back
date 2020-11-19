import { html } from 'https://unpkg.com/lit-html?module';
import refresh from '../utils/refresh.js';
import { addOffer } from '../services/offers.js';
import { getCurrentUser } from '../services/users.js';
import { getProducts } from '../services/products.js';
import resolvePromise from '../directives/resolvePromise.js';

let photosCounter = 0;
let loading = false;
let currentProduct = 0;
let productList = [];
let lismyProducts = [];
let currentUser;

const home = () => {
  function handlerNextProduct() {
    if (currentProduct === productList.length - 1) {
      currentProduct = 0;
    } else {
      currentProduct += 1;
    }
    refresh();
  }

  function handlerPreviusPhoto() {
    if (photosCounter > 0) photosCounter -= 1;
    refresh();
  }
  function handlerNextPhoto() {
    if (photosCounter < productList.length) photosCounter += 1;
    refresh();
  }

  const handlerDoOffer = async (event) => {
    loading = true;
    refresh();
    event.preventDefault();

    /* To get the selected product in dropdown */
    const combo = document.getElementById('producto');
    console.log({ combo });

    const selected = combo.options[combo.selectedIndex].text;

    const current = productList[currentProduct];
    /* Data to build the offer */

    const objOffer = {
      offeredProductname: selected,
      wantedProductname: current.name,
      offeredProductDescription: current.description,
      offeredProductPhotos: current.photos,
      contactInformation: {
        email: currentUser.email,
        fullName: currentUser.fullName,
        phone: currentUser.phone,
      },
    };

    try {
      await addOffer(objOffer);
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
      refresh();
    }
  };

  const fetchProducts = async () => {
    const { data: products } = await getProducts();

    const { data: user } = await getCurrentUser();
    currentUser = user;

    productList = products.filter((p) => p.ownerId !== currentUser._id);

    lismyProducts = products
      .filter((p) => p.ownerId === currentUser._id)
      .map((p) => p.name);

    if (productList.length === 0) {
      return html`<p>No existen productos en la plataforma!</p>`;
    }
    const current = productList[currentProduct];

    return html`
      <div class="left_container">
        <button class="arrow" type="button" @click="${handlerPreviusPhoto}">
          &#x3C;
        </button>
      </div>

      <div class="center_container">
        <div class="tittle">
          <p>${current.name}</p>
        </div>

        <img
          class="image"
          src=${current.photos[photosCounter]}
          alt="product"
          height="400"
          width="400"
        />
        <p class="photosCounter">
          Foto: ${photosCounter + 1}/${current.photos.length}
        </p>
        <div class="description">
          <p>${current.description}</p>
        </div>

        <div class="myProducts_container">
          <p>Elige cuál de tus productos deseas ofrecer a cambio:</p>
          <select name="current" id="producto">
            ${lismyProducts.map((p) => html`<option value="p">${p}</option>`)}
          </select>
          <br />
        </div>

        <div class="buttons_container">
          <button class="btn offer" type="button" @click="${handlerDoOffer}">
            ${loading ? 'Loading...' : 'Ofertar'}
          </button>
          <button
            class="btn reject"
            type="button"
            @click="${handlerNextProduct}"
          >
            ${loading ? 'Loading...' : 'Siguiente'}
          </button>
        </div>
      </div>

      <div class="right_container">
        <button class="arrow" type="button" @click="${handlerNextPhoto}">
          &#x3E;
        </button>
      </div>
    `;
  };

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
      ${resolvePromise(fetchProducts())}
    </div>
  `;
};
export default home;
