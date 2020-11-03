import {html} from 'https://unpkg.com/lit-html?module';

    const connections = () => {
        return html`

        
        <style>
            #menu {
            background: #446ff2;
            color: #f2f2f2;
            height: 45px;
            padding-left: 18px;
            border-radius: 10px;
          }
          #menu ul,
          #menu li {
            margin: 0 auto;
            padding: 0;
            list-style: none;
          }
          #menu ul {
            width: 100%;
          }
          #menu li {
            float: right;
            display: inline;
            position: relative;
          }
          #menu a {
            display: block;
            line-height: 45px;
            padding: 0 14px;
            text-decoration: none;
            color: #f2f2f2;
            font-size: 16px;
          }
          
          #menu li a:hover {
            color: #446ff2;
            background: #f2f2f2;
          }
          #menu input {
            display: none;
            margin: 0;
            padding: 0;
            height: 45px;
            width: 100%;
            opacity: 0;
            cursor: pointer;
          }
          #menu label {
            display: none;
            line-height: 45px;
            text-align: center;
            position: absolute;
            left: 35px;
          }
          
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
          
          /* Color Theme Swatches in Hex */
          .Attune---creative-agency-1-hex {
            color: #446ff2;
          }
          .Attune---creative-agency-2-hex {
            color: #527af2;
          }
          .Attune---creative-agency-3-hex {
            color: #5c8ef2;
          }
          .Attune---creative-agency-4-hex {
            color: #bf9663;
          }
          .Attune---creative-agency-5-hex {
            color: #f2f2f2;
          }

          .connTittle{
              
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
          </style>   

          
            
            
         <nav id='menu'>
                <ul>
                  <li><a href='http://'>Perfil</a></li>
                  <li><a href='http://'>Producto</a></li>
                  <li><a href='http://'>Conexiones</a></li>
                  <li><a href='http://'>Explorar</a></li>      
                </ul>
          </nav>  
          <h1 class="connTittle">Tus conexiones:</h1>
                <div class="connContainer">

                  <div class="connection">
                    <h2 class="connProdTittle">Bicicleta GT R26 - Poco uso</h2>

                    <img 
                      class="connProdPhoto"
                      src="https://farm6.staticflickr.com/5104/5608004353_3fc49c27d2_b.jpg" 
                      alt="product photo" 
                      width="175" 
                      height="175"
                      align="right"
                      > 

                    
                    <p class="connProdDescription">Muy poco uso y funcionando en perfecto estado.</p>

                    <h2 class="connProdTittle">Propietario: Oscar Lopez</h2>
                    <p>091 686 889</p>
                    <p>oscarelLopez@gmail.com</p>
                  </div>
                  <div class="connection">
                    <h2 class="connProdTittle">Bicicleta GT R26 - Poco uso</h2>

                    <img 
                      class="connProdPhoto"
                      src="https://farm6.staticflickr.com/5104/5608004353_3fc49c27d2_b.jpg" 
                      alt="product photo" 
                      width="175" 
                      height="175"
                      align="right"
                      > 

                    
                    <p class="connProdDescription">Muy poco uso y funciddddddddddddddddddddddddddddddddddddd
                      ddddddddddddddddddd
                      dddddddddddddddddddddddddddddddd
                      dddddddddddddddddddddddddddddddddonando en descripcion largaaaaaaaaaaaaaaaaaaa
                      aaaaaaaaaaaaaaaa
                      aaaaaaa perfecto estado.</p>

                    <h2 class="connProdTittle">Propietario: Oscar Lopez</h2>
                    <p>091 686 889</p>
                    <p>oscarelLopez@gmail.com</p>
                  </div>

                  

                </div>
        
          

      `;
    }
 export default connections;