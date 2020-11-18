import { html } from 'https://unpkg.com/lit-html?module';

import resolvePromise from '../directives/resolvePromise.js';
import { getOffers } from '../services/offers.js';

const offerItem = (offer) => {
  return html` 
      <div class="connection">
        <p>Por tu: <strong>${offer.wantedProductname}</strong></p>
        <p>Ofrecen: <strong>${offer.offeredProductname}</strong></p>
        <p class="connProdDescription">" ${offer.offeredProductDescription} "</p>
        <p>Propietario: <strong>${offer.contactInformation.fullName}</strong></p>
        <p>Teléfono: <strong>${offer.contactInformation.phone}</strong></p>
        <p>Email: <strong>${offer.contactInformation.email}</strong></p>

        ${offer.offeredProductPhotos.length > 0 ?
          offer.offeredProductPhotos.map(
            (photoURL) => 
              html`<img
                class="connProdPhoto"
                src="${photoURL}"
                alt="product photo"
                width="175"
                height="175"
                align="center"
              />` 
            ): html`<p class="pText">Este producto no tiene fotos disponibles. </p>`}
      </div>`
  
};

const connections = () => {
  const fetchOffers = async () => {
    const { data: offers } = await getOffers();

    if (offers.length === 0) {
      return html`<p>Aun no tienes ofertas!</p>`;
    }
    console.log(offers);
    return html`${offers.map(offerItem)}`;
  };


  return html`
    <style>
      .connTittle {
        margin-left: 15px;
      }
      .pText {text-align: center}
      .connContainer {
        text-align: left;
      }

      .connProdPhoto {
        border-radius: 10px;
        margin: 10px;
      }

      .connection {
        border-radius: 10px;
        margin: 15px;
        padding: 15px;
        height: auto;
        background-color: rgb(28, 141, 179);
      }
    </style>

    <h1 class="connTittle">Tus conexiones:</h1>
    <div class="connContainer">
    ${resolvePromise(fetchOffers())}
    </div>
  `;
};
export default connections;
