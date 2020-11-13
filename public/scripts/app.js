import { render } from 'https://unpkg.com/lit-html?module';

import { isAuthenticated } from './utils/auth.js';
import authenticatedApp from './authenticatedApp.js';
import unauthenticatedApp from './unauthenticatedApp.js';

const renderApp = () => {
  const app = isAuthenticated() ? authenticatedApp : unauthenticatedApp;
  // const app = authenticatedApp; //uncomment to skip authentication
  render(app(), document.body);
};

window.addEventListener('nav', renderApp);

renderApp();
