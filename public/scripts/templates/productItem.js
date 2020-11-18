import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map?module';

import { del } from '../utils/api.js'

const productItem = (product) => {
  const actionsStyles = {
    'margin-top': '1rem',
    display: 'flex',
  }

  const productionButtonStyles = {
    'background-color': 'red',
    'margin-left': '1rem',
  }

  const handleDelete = async (evt) => {
    await del('/products')
  }

  return html`<div class="prodContainer">
    <h3>Nombre: ${product.name}</h3>
    <h3>Descripción:</h3>
    <p>${product.description}</p>
    <h3>Fotos:</h3>

    <div class="prod-photo-container">
      ${product.photos.map(
        (p) =>
          html`<img
            class="prod-photo"
            src=${p}
            alt="product photo"
            width="180"
            height="180"
          />`,
      )}

      <button class="btn-add" disabled>+ Agregar foto...</button>
    </div>

    <div style=${styleMap(actionsStyles)}>
      <button disabled>Editar</button>
      <button style=${styleMap(productionButtonStyles)} @click=${handleDelete}>Borrar</button>
    </div>
  </div>`;
};

export default productItem;
