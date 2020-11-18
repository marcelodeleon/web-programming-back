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

  let myconnections = [[objProduct, objPerson], [objProduct, objPerson]]


  return html`
    <style>
      .connTittle {
        margin-left: 15px;
      }

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
        height: 260px;
        background-color: rgb(28, 141, 179);
      }
  </style>

    <h1 class="connTittle">Tus conexiones:</h1>
    <div class="connContainer">
      ${myconnections.map(p => 
        html`
        <div class="connection">
          <p>Ofrecen: <strong>${objProduct.name}</strong></p>
          <p>Por tu: <strong>${objProduct.name}</strong></p>

          <img
            class="connProdPhoto"
            src="${objProduct.photos[0]}"
            alt="product photo"
            width="175"
            height="175"
            align="right"
          />

          <p class="connProdDescription">" ${objProduct.descrption} "</p>
          <p>Propietario: <strong>${objPerson.name}</strong></p>
          <p>Teléfono: <strong>${objPerson.phone}</strong></p>
          <p>Email: <strong>${objPerson.email}</strong></p>
        </div>`
      )}
    </div>
  `;
};
export default connections;
