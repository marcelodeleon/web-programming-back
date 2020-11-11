import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map?module';
import { logOut } from '../services/auth.js';
import navbarItem from './navbarItem.js'

const navbar = () => {
  const navStyles = {
    background: '#446ff2',
    color: '#f2f2f2',
    'padding-left': '18px',
    'border-radius': '10px',
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
    { path: '#', label: 'Perfil' },
    { path: '/product', label: 'Producto' },
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
