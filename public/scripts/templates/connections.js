import { html } from 'https://unpkg.com/lit-html?module';

const connections = () => {

  //Objetc for testing
  var objProduct = new Object();
  objProduct.name = "Guitarra Criolla Fender!";
  objProduct.photos = ["https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg","https://upload.wikimedia.org/wikipedia/commons/e/e8/Classical_Guitar_two_views.jpg"]
  objProduct.descrption = "Excelente sonido. Afina bien y está en muy buen estado. Solo tiene un detalle que se aprecia en la última foto, pero no afecta ni el sonido ni el funcionamiento de la misma.";

  var objPerson = new Object();
  objPerson.name = "Oscar Lopez";
  objPerson.phone = "098 654 445";
  objPerson.email = "oscarlopez45@gmail.com";

  var myconnections = [[objProduct, objPerson], [objProduct, objPerson]]

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

        background-color: rgb(28, 141, 179);
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

    ${myconnections.map(p => 
      html`
      <div class="connection">
      <h2 class="connProdTittle">${objProduct.name}</h2>

      <img
        class="connProdPhoto"
        src="${objProduct.photos[0]}"
        alt="product photo"
        width="175"
        height="175"
        align="right"
      />

      <p class="connProdDescription">${objProduct.descrption}</p>

      <h2 class="connProdTittle">Propietario: ${objPerson.name}</h2>
      <p>${objPerson.phone}</p>
      <p>${objPerson.email}</p>
    </div>
      `
      )}
    </div>
  `;
};
export default connections;
