import { html } from 'https://unpkg.com/lit-html?module';

const page404 = () => {
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
      
                  <span class="number-error">404</span>
                  <div class="text-error">No pudimos encontrar lo que estas buscando :/</div>
                  <div class="goBack-error">
                    <a href="#" >Regresar al inicio</a>
                  </div>

      </div>
  </div>
  
  
  `;
};
export default page404;
