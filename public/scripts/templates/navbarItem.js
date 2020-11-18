import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map?module';

const navbarItem = ({ path, label, onClick = () => {} }) => {
  const itemLinkStyles = {
    padding: '0 1rem',
    'text-decoration': 'none',
    color: '#f2f2f2',
    'font-size': '1rem',
  };

  return html`
    <li>
      <a style=${styleMap(itemLinkStyles)} href=${path} @click=${onClick}
        >${label}</a
      >
    </li>
  `;
};

export default navbarItem;
