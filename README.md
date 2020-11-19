# Proyecto

## Trueque

Grupo 5:

- **Marcelo de León**
- **Fiorella Escobar**
- **Nicolás Machado**

Para acceder a la app (https://trueque.netlify.app/)

# Introducción

En el siguiente documento se pretende explicar las pautas principales para el desarrollo de Trueque, con el fin de utilizar este documento a modo de guía durante su construcción y permitirle al lector tener una visión más clara de lo que es el proyecto.

## ¿Qué es Trueque?

Es una plataforma web que facilita el intercambio o trueque de objetos entre los miembros. En pocas palabras, un usuario carga su objeto e indica si está interesado(o no) en los productos que los otros usuarios ofrecen. Cuando dos usuarios están interesados en sus objetos entre sí, se genera una conexión y se habilita la información de contacto para llevar a cabo el intercambio.
Se puede realizar cierta analogía con las aplicación de citas como lo es Tinder.

# Funciones Principales

## Registro y creación de perfil

Al ser un sitio de interacción entre usuarios estos deberán registrarse e identificarse para utilizarla. Por ello la web brinda una interfaz para el registro de usuario dónde se deberá ingresar información personal básica de la persona y credenciales para acceder a su cuenta.

## Login/Logout

Como se manejan servicios de autenticación y credenciales, también se implementarán funcionalidades para iniciar y cerrar la sesión activa del usuario. La plataforma utilizará librerías y recursos como token para administrar estos estados.

## Subir producto

En la primera versión funcional de la plataforma se habilitará un solo producto u objeto por perfil. Para futuras versiones se maneja la posibilidad de ampliar este rango. El usuario deberá cargar distintas fotos del objeto, un título, una descripción y detalles de lo que desea intercambiar. Esta información será visible para el resto de los usuarios que utilicen la web.

## Ofertar/Descartar

Una vez que el usuario tiene su perfil cargado podrá explorar las distintas propuestas que existen en la plataforma. En la pestaña "Explorar" se mostrará uno a uno los productos a disposición y se proyectarán dos botones:

- **Ofertar:** Me interesa el producto, quiero ofertar y comunicarme con el dueño para un posible trueque!
- **Siguiente:** El producto no es de mi interés, no deseo contactarme con su dueño y paso al siguiente.

## Conexiones

En esta pesataña es dónde el usuario puede ver todas las ofertas que ha recibido sobre sus productos e información sobre esta.

# Arquitectura

Para la implementación de este proyecto se plantea utilizar una arquitectura **MVC** para segmentar las tareas y responsabilidades de cada capa de la plataforma.

- **Modelo:** Mongo DB para almacenar y gestionar información de los usuarios, productos, conexiones, etc.
- **Vista:** Html y Css para la visualización en los navegadores web.
- **Controlador:** Funciones definidas en Javascript sobre Node Js.

# Tecnologías

Para llevar a cabo la construcción de este proyecto se planea utilizar mayormente las tecnologías aprendidas a través del curso, con el fin de afirmar los conocimientos adquiridos y poder trabajar con herramientas que sean más familiares para los desarrolladores. Además, trabajar sobre estas herramientas también permite que podamos consultar con el docente algunas cuestiones o problemas que se presenten.

## Frontend

- **Html**
- **Css**
- **Javascript**
- **Lit-Pages**

## Backend

- **Nodejs**
- **MongoDB**
- **JWToken**
- **Librería de encriptación (Bcrypt)**

## Deploy

- **Netlify**
- **Netlify functions**


# Rest

Utilizaremos Rest que es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estándar HTTP.

Se usará

- **GET:** Obtener datos.
- **PUT:** Actualizar datos.
- **POST:** Crear un nuevo recurso.
- **DELETE:** Borrar el recurso

Al utilizar PUT, los resultados posibles son:

- **201** (Recurso creado, cuando le pasamos el id deseado al servidor)
- **200** (Recurso modificado correctamente)

Al utilizar Delete, algunos resultados posibles:

- **200** OK
- **404** Not found
- **401** Unathorized
- **500** Server error

# Endpoints

| Endpoint                                  | Descripción                                           |
| ----------------------------------------- | ----------------------------------------------------- |
| LOGIN                                     |                                                       |
| GET /users/\$userId                       | Obtiene la información del usuario con el Id "userId" |
| POST /users                               | Agrega un usuario                                     |
| PUT /users/\$userId                       | Edita un usuario                                      |
| GET /users/\$userId/products              | Obtiene los productos del usuario con el Id "userId"  |
| POST/products                             | Agrega un producto para el usuario autenticado        |
| PUT /products/\$productId                 | Edita un producto                                     |
| DELETE /products/\$productId              | Elimina el producto con Id "productId"                |
| GET /products                             | Obtiene todos los productos                           |
| POST /offers/\$productId/                 | Asocia una oferta a un producto                       |
| GET /offers                               | Obtiene todos los likes del usuario autenticado       |


# Consideraciones para próximas versiones

Algunas implementaciones que nos gustaría agregar en un futuro.

## Restablecer contraseña

Se accede a una sección antes del login llamada “Restablecer contraseña” que mediante un correo o el número de celular se puede recuperar la contraseña.
Anteriormente el usuario tiene que agregar un celular o un correo electrónico diferente a los utilizados en la cuenta.

## Puntajes a los usuarios

Cada usuario podrá dar un puntaje al resto de los usuarios con los que tuvo match.
En el perfil de cada usuario se visualizará la puntuación proporcionada por los otros usuarios, con comentarios acerca de la experiencia de intercambio de los objetos.

## Eliminar usuario

Poder dar de baja un usuario ya creado porque no utilizará más la aplicación.

## Complejidad en la oferta

Permitirle al usuario crear una oferta más elaborada, pudiendo adjuntar un mensaje o inclusive varios productos como parte de la propuesta.

