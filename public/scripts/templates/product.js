import { html } from 'https://unpkg.com/lit-html?module';
import refresh from '../utils/refresh.js';
import { addProduct } from '../services/products.js';
let loading = false;
let showForm = "none";
const product = () => {
  

    //Objetc for testing
    var objProduct = new Object();
    objProduct.name = "Guitarra Criolla Fender!";
    objProduct.photos = ["https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg","https://upload.wikimedia.org/wikipedia/commons/e/e8/Classical_Guitar_two_views.jpg"]
    objProduct.description = "Excelente sonido. Afina bien y está en muy buen estado. Solo tiene un detalle que se aprecia en la última foto, pero no afecta ni el sonido ni el funcionamiento de la misma.";
  
    var myProducts = [objProduct]

    function handlerShowForm() {
      showForm == "none" ? showForm = "block" : showForm = "none"; 
      refresh();
    }

    const handlerNewProduct = async (event) => {
      event.preventDefault();

      loading = true;
      refresh();
      const name = event.target.name.value;
      const description = event.target.description.value;
      const photos = [event.target.f1.value, event.target.f2.value, event.target.f3.value]
      
      try {
        await addProduct({name, description, photos});
      } catch (err) {
        console.log(err);
      }
      loading = false;
      refresh();
      handlerShowForm()       
    };

  return html`
    <style>
      .prodsContainer {
        margin: 15px;
      }

      .prod-photo-container {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        width: 100%;
      }

      .prod-photo {
        flex: 0 1 auto;
        align-self: auto;
        border-radius: 10px;
        margin: 5px;
      }

      .prodContainer {
        margin: 10px;
        padding: 20px;
        background-color: rgb(28, 141, 179);
        border-radius: 10px;
      }

      .btn-prod-edit {
        margin-top: 15px;
      }

      .container-newProduct {
        margin-top: 15vh;
        margin-left: 30%;
        margin-botom: 5vh;
        width: 40%;
        height: 70vh;
        background: #a5a5a5;
        border-radius: 2%;
        padding: 15px;
        position: fixed;
        display: ${showForm};
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

      .btn-enviar { float: left;}
      .btn-cerrar {float: right;}
    </style>

    <div class="container-newProduct">
      <h2>¿Qué tienes para intercambiar?</h2>
      <form @submit=${handlerNewProduct}>
        <input name="name" type="text" placeholder="Nombre del producto" maxlength="30" required />
        </br>
        Descripción:
        <textarea name="description" placeholder="Cuéntanos un poco..." cols="40" rows="6" required></textarea>
        </br>
        Fotos:
        <input name="f1" type="text" placeholder="URL foto 1" maxlength="50" />
        <input name="f2" type="text" placeholder="URL foto 2" maxlength="50" />
        <input name="f3" type="text" placeholder="URL foto 3" maxlength="50" />
        <button class="btn-enviar" name="guardar" type="submit">
        ${loading ? 'Loading...' : 'Guardar'}
        </button>
        <button class="btn-cerrar" name="cerrar" @click="${handlerShowForm}">Cerrar</button>
      </form>
    </div>


    <div class="prodsContainer">
      <h1 class="prodTittle">Tus Productos:</h1>

      ${myProducts.map(mp =>
        html`      
          <div class="prodContainer">
            <h3>Nombre: ${mp.name}</h3>
            <h3>Descripción:</h3>
            <p>${mp.description}</p>
            <h3>Fotos:</h3>

            <div class="prod-photo-container">
              ${mp.photos.map(p => 
                html`<img
                  class="prod-photo"
                  src= ${p}
                  alt="product photo"
                  width="180"
                  height="180"
                />`
              )}          

              <button class="btn-add" disabled>+ Agregar foto...</button>
            </div>

            <button class="btn-prod-edit" disabled>Editar Producto</button>
          </div>
          `)}

      <button class="prodsContainer" @click="${handlerShowForm}">Agregar Nuevo Producto</button>
    </div>
  `;
};

export default product;
