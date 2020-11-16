import { html } from 'https://unpkg.com/lit-html?module';

const product = () => {

    //Objetc for testing
    var objProduct = new Object();
    objProduct.name = "Guitarra Criolla Fender!";
    objProduct.photos = ["https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg","https://upload.wikimedia.org/wikipedia/commons/e/e8/Classical_Guitar_two_views.jpg"]
    objProduct.descrption = "Excelente sonido. Afina bien y está en muy buen estado. Solo tiene un detalle que se aprecia en la última foto, pero no afecta ni el sonido ni el funcionamiento de la misma.";
  
    var myProducts = [objProduct, objProduct, objProduct]

    function handlerOffer() {
      console.log("Realizar Offerta");
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

      .prodsContainer {
        margin: 10px;
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
        margin-top: 10px;
      }
    </style>
    <div class="prodsContainer">
      <h1 class="prodTittle">Tus Productos:</h1>
    ${myProducts.map(mp =>
      html`
      
      <div class="prodContainer">
        <h3>Nombre: ${mp.name}</h3>
        <h3>Descripción:</h3>
        <p>${mp.descrption}</p>
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

          <button class="btn-add">+ Agregar foto...</button>
        </div>

        <button class="btn-prod-edit">Editar Producto</button>
      </div>
      `)}

    <button class="">Agregar Nuevo Producto</button>
    </div>
  `;
};

export default product;
