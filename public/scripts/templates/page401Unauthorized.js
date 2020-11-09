import { html } from 'https://unpkg.com/lit-html?module';

const page401Unauthorized = () => {
  return html`
    
  <style>

  body {
    font-family:monospace;

    background: #dedede;
    text-align: center;
    margin-top: 5%;
  
  }

  .number-error {
    font-size: 40vh;
  }

  .text-error {
    font-size: 4vh;
  }
  .goBack-error {
    margin-top: 30px;
    font-size: 3vh;
  }
  </style>   
  
  <div class="container-404">
      
                  <span class="number-error">401</span>
                  <div class="text-error">No tienes permisos para acceder a esta dirección web.</div>
                  <div class="goBack-error">
                    <a href="#" >Regresar al inicio</a>
                  </div>

      </div>
  </div>
  
  
  `;
};
export default page401Unauthorized;
