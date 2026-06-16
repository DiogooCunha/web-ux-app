
import { Header } from './components/header/index.js';
import { RepoCard } from './components/card/index.js';
import { Divider } from './components/divider/index.js';

customElements.define('app-header', Header);
customElements.define('app-card', RepoCard);
customElements.define('app-divider', Divider);

console.log('App initialized and components registered.');
