import { html } from 'https://unpkg.com/lit-html?module';

import router from './templates/router.js';
import home from './templates/home.js';
import navbar from './templates/navbar.js';

const routes = {
  '/': home
};

const authenticatedApp = () => html` ${navbar()} ${router(routes)} `;

export default authenticatedApp;
