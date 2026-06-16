const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./card.css', import.meta.url).href}">
  <div class="card">
    <div class="card-top">
      <div class="repo-avatar"><img src="" alt="" /></div>
      <span class="repo-name"></span>
    </div>
    <div class="card-commit">
      <span class="dot"></span>
      <span class="commit-msg"></span>
      <div class="avatars"></div>
    </div>
    <div class="card-footer">
      <span class="timestamp"></span>
    </div>
  </div>
`;

class RepoCardComponent extends HTMLElement {
  static get observedAttributes() {
    return ['repo-icon', 'repo-name', 'commit-message', 'commit-time', 'commit-avatars', 'pr-state'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.repo-avatar img').src = this.getAttribute('repo-icon') || '';
    this.shadowRoot.querySelector('.repo-name').textContent = this.getAttribute('repo-name') || '';
    this.shadowRoot.querySelector('.commit-msg').textContent = this.getAttribute('commit-message') || '';
    this.shadowRoot.querySelector('.timestamp').textContent = this.getAttribute('commit-time') || '';
    this.shadowRoot.querySelector('.dot').dataset.state = this.getAttribute('pr-state') || 'open';

    const avatarsRaw = this.getAttribute('commit-avatars') || '';
    const container = this.shadowRoot.querySelector('.avatars');
    avatarsRaw.split(',').map(s => s.trim()).filter(Boolean).forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = '';
      img.className = 'avatar';
      container.appendChild(img);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot.querySelector('.repo-name')) return;

    if (name === 'repo-icon') this.shadowRoot.querySelector('.repo-avatar img').src = newValue || '';
    if (name === 'repo-name') this.shadowRoot.querySelector('.repo-name').textContent = newValue || '';
    if (name === 'commit-message') this.shadowRoot.querySelector('.commit-msg').textContent = newValue || '';
    if (name === 'commit-time') this.shadowRoot.querySelector('.timestamp').textContent = newValue || '';
    if (name === 'pr-state') this.shadowRoot.querySelector('.dot').dataset.state = newValue || 'open';
    if (name === 'commit-avatars') {
      const container = this.shadowRoot.querySelector('.avatars');
      container.innerHTML = (newValue || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .map(url => `<img src="${url}" alt="" class="avatar">`)
        .join('');
    }
  }
}

customElements.define('app-card', RepoCardComponent);
export { RepoCardComponent };