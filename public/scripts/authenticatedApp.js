import { html } from 'https://unpkg.com/lit-html?module';

import router from './templates/router.js';
import home from './templates/home.js';
import navbar from './templates/navbar.js';
import product from './templates/product.js'
import connections from './templates/connections.js'

const routes = {
  '/': home,
  '/product': product,
  '/connections': connections,
};

const authenticatedApp = () => html` ${navbar()} ${router(routes)} `;

export default authenticatedApp;
