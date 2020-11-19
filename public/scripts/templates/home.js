import { html } from 'https://unpkg.com/lit-html?module';
import refresh from '../utils/refresh.js';
import { addOffer } from '../services/offers.js';
import { getUser } from '../services/users.js';



//DATASET:
  let objProduct1 = { 
    name : 'Guitarra Criolla Fender!',
    photos : [
      'https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Classical_Guitar_two_views.jpg',
      ],
    descrption :
      'Excelente sonido. Afina bien y está en muy buen estado. Solo tiene un detalle que se aprecia en la última foto, pero no afecta ni el sonido ni el funcionamiento de la misma.'  
  };
  let objProduct2 = { 
    name : 'Lampara Veladora Antigua',
    photos : [
      'https://http2.mlstatic.com/D_NQ_NP_861758-MLU43231537979_082020-V.jpg',
      'https://http2.mlstatic.com/D_NQ_NP_494301-MLU20318770834_062015-V.jpg',
      'https://http2.mlstatic.com/D_NQ_NP_929493-MLU43658590014_102020-V.jpg'],
    descrption :
      'Restaurada de casa antigua, ya no la uso más.'  
  };
  let objProduct3 = { 
    name : 'Escritorio para PC c/cajón',
    photos : [
      'https://http2.mlstatic.com/escritorio-para-pc-con-un-cajon-usado-D_NQ_NP_623345-MLU43646133204_102020-F.jpg',
      'https://http2.mlstatic.com/escritorio-para-pc-con-un-cajon-usado-D_NQ_NP_753934-MLU43646126380_102020-F.jpg',
      'https://http2.mlstatic.com/escritorio-para-pc-con-un-cajon-usado-D_NQ_NP_766701-MLU43646121582_102020-F.jpg'],
    descrption :
      'Me compré otro y lo tengo ocupando espacio, escucho propuestas!'  
  };

  let lisProducts = [objProduct1, objProduct2, objProduct3];
  let lismyProducts = ['Lote de libros', 'Silla de escritorio', 'Bicicleta GT R20'];
//END DATASET:

let photosCounter = 0;
let loading = false;
let currentProduct = 0;

const home = () => {
  let objProduct = lisProducts[currentProduct];

  // const fetchUser = async () => {
  //   //GET USERID
    
  //   const { data: user } = await getUser(userId);

  //   if (!user) {
  //     return html`<p>El producto seleccionado no existe!</p>`;
  //   }

  //   console.log(user);
  // };

  // fetchUser();

  const handlerDoOffer = async (event) => {
    loading = true;
    refresh();
    event.preventDefault();

     
    
    /* To get the selected product in dropdown */
    let combo = document.getElementById("producto");
    let selected = combo.options[combo.selectedIndex].text;

    /* Data to build the offer*/
    //COMPLET WITH THE FETCH INFOMATION----------
    let objOffer = {
      offeredProductname : selected,
      wantedProductname : objProduct.name,
      offeredProductDescription : objProduct.descrption,
      offeredProductPhotos : [
        'https://media.fanaticguitars.com/2016/05/alhambra-4p-1.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/e8/Classical_Guitar_two_views.jpg',
      ],
      contactInformation:{
      email : "soldado@gmail.com",
      fullName : "nombre soldado",
      phone : "123 456 789"}  
    }

    try {
      await addOffer(objOffer);
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
      refresh();
    }
  }

  function handlerNextProduct() {
    currentProduct === lisProducts.length -1 ? currentProduct=0 : currentProduct++;
    photosCounter = 0;
    refresh();
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
          <p>Elige cuál de tus productos deseas ofrecer a cambio:</p>
          <select name="objProduct" id="producto">
            ${lismyProducts.map((p) => html`<option value="p">${p}</option>`)}
          </select>
          <br />
        </div>

        <div class="buttons_container">
          <button class="btn offer" type="button" @click="${handlerDoOffer}">
          ${loading ? 'Loading...' : 'Ofertar'}
          </button>
          <button class="btn reject" type="button" @click="${handlerNextProduct}">
          ${loading ? 'Loading...' : 'Siguiente'}
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
