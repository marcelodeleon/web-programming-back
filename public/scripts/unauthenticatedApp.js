import { html } from 'https://unpkg.com/lit-html?module';

import login from './templates/login.js';

const unauthenticatedApp = () => html`
  <h1>Please log in to <strong>WPJ</strong></h1>
  ${login()}
`;

export default unauthenticatedApp;
