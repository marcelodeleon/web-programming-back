import { html } from 'https://unpkg.com/lit-html?module';

import router from './templates/router.js';
import home from './templates/home.js';
import navbar from './templates/navbar.js';

import connections from './templates/connections.js';
import products from './templates/product.js';
import profile from './templates/profile.js';

const routes = {
  '/': home,
  '/connections': connections,
  '/products': products,
  '/profile': profile,
};

const authenticatedApp = () => html` ${navbar()} ${router(routes)} `;

export default authenticatedApp;
