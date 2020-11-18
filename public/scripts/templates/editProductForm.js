import { html } from 'https://unpkg.com/lit-html?module';
import { editProduct, getProduct } from '../services/products.js';
import refresh from '../utils/refresh.js';
import { navigate } from '../utils/navigation.js';
import resolvePromise from '../directives/resolvePromise.js';

let loading = false;

const productForm = (product) => {
  const submitHandler = async (event) => {
    loading = true;
    refresh();
    event.preventDefault();

    const name = event.target.name.value;
    const description = event.target.description.value;

    try {
      await editProduct({ id: product._id, name, description });
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
      navigate('/products');
    }
  };

  return html`
    <form @submit=${submitHandler}>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        maxlength="30"
        required
        value=${product.name}
        autofocus
      />
      Descripción:
      <textarea name="description" placeholder="Cuéntanos un poco..." cols="40" rows="6" required>${
        product.description
      }</textarea>
      </br>
      <button id="enviar" name="enviar" type="submit">
        ${loading ? 'Loading...' : 'Guardar'}
      </button>
    </form>
  `;
};

const editProductForm = () => {
  const fetchProduct = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    const { data: product } = await getProduct(productId);

    if (!product) {
      return html`<p>El producto seleccionado no existe!</p>`;
    }

    return html`${productForm(product)}`;
  };

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
      <h2>Editar Producto</h2>
      ${resolvePromise(fetchProduct())}
    </div>
  `;
};

export default editProductForm;
