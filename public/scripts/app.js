import { render } from 'https://unpkg.com/lit-html?module';

import { isAuthenticated } from './utils/auth.js';
import authenticatedApp from './authenticatedApp.js';
import unauthenticatedApp from './unauthenticatedApp.js';
import home from './templates/home.js';
import product from './templates/product.js';

const renderApp = () => {
  const app = isAuthenticated() ? authenticatedApp : home; //antes de home: unauthenticatedApp
  render(app(), document.body);
};

window.addEventListener('auth', renderApp);

renderApp();
