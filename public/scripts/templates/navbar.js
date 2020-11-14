import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map?module';
import { logOut } from '../services/auth.js';
import navbarItem from './navbarItem.js'


const navbar = () => {
  const navStyles = {
    background: '#446ff2',
    color: '#0095eb',
    'padding-left': '18px',
  }

  const unorderdListStyles = {
    display: 'flex',
    'flex-direction': 'row-reverse',
    'align-items': 'center',
    height: '3rem',
    padding: '0 2rem',
    'list-style': 'none',
  }

  const navbarItems = [
    { path: '#', label: 'Log Out', onClick: logOut },
    { path: '/profile', label: 'Perfil' },
    { path: '/products', label: 'Producto' },
    { path: '/connections', label: 'Conexiones' },
    { path: '/', label: 'Explorar' },
  ]

  return html`
    <nav id="menu" style=${styleMap(navStyles)}>
      <ul style=${styleMap(unorderdListStyles)}>
        ${navbarItems.map(({ path, label }) => navbarItem({ path, label }))}
      </ul>
    </nav>
  `;
};


export default navbar;
