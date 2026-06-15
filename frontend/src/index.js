
import { Header } from './components/header/index.js';
import { RepoCard } from './components/card/index.js';

customElements.define('app-header', Header);
customElements.define('app-card', RepoCard);

console.log('App initialized and components registered.');
