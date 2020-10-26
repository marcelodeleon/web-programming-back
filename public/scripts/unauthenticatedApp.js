import { html } from 'https://unpkg.com/lit-html?module';

import loginForm from './templates/loginForm.js';

const unauthenticatedApp = () => html`
  <home></home> 
  <h1>Log in to <strong>WPJ</strong></h1>
  ${loginForm()}
`;

export default unauthenticatedApp;
