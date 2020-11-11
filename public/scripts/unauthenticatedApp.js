import { html } from 'https://unpkg.com/lit-html?module';

import login from './templates/login.js';
import router from './templates/router.js';
import register from './templates/register.js'

const routes = {
  '/': login,
  '/register': register
};

const unauthenticatedApp = () => html`${router(routes)}`;

export default unauthenticatedApp;
