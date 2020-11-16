import { html } from 'https://unpkg.com/lit-html?module';

const profile = () => {
  //Objetc for testing
  
  let objPerson = new Object();
  objPerson.name = "Oscar Lopez";
  objPerson.phone = "098 654 445";
  objPerson.email = "oscarlopez45@gmail.com";
  objPerson.profilePhoto = "https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png";

  return html` <style>
      .Container {
        margin: 30px 50px;
        text-align: center;
        border-style: solid;
        padding: 30px;
      }
      .Name {
        font-size: medium;
      }
      .Info {
        font-size: medium;
        text-align: left;
      }
      .Editar {
        font-size: medium;
        text-align: center;
      }

    </style>

    <div class="Container">
      <h1 class="Name">${objPerson.name}</h1>
      <img
        class="image"
        src=${objPerson.profilePhoto}
        alt="product"
        height="200"
        width="200"
      />
      
      <h3 class="Info">Email: ${objPerson.email}</h3>
      <h3 class="Info">Telefono de Contacto: ${objPerson.phone}</h3>
      <h3 class="Info">Calificacion: -</h3>

      <button class="Editar">Editar Perfil</button>
    </div>`;
};
export default profile;
