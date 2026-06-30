const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./repo-card-infos.css', import.meta.url).href}">
  <div class="card">
    <div class="card-header">
      <img class="repo-icon" src="" alt="" />
      <span class="repo-name"></span>
      <span class="header-line"></span>
      <div class="avatars"></div>
    </div>

    <div class="card-body">
      <div class="stats-col">
        <h3>Pull requests</h3>
        <ul>
          <li>Open Pull requests &rarr; <strong class="pr-open"></strong></li>
          <li>All Pull requests &rarr; <strong class="pr-all"></strong></li>
          <li>Last PR &rarr; <strong class="pr-last"></strong></li>
        </ul>
      </div>

      <div class="divider-vertical"></div>

      <div class="stats-col">
        <h3>Issues</h3>
        <ul>
          <li>Issues not resolved &rarr; <strong class="issues-unresolved"></strong></li>
          <li>All Issues &rarr; <strong class="issues-all"></strong></li>
          <li>Last Issue &rarr; <strong class="issues-last"></strong></li>
        </ul>
      </div>
    </div>

    <div class="card-footer">
      <span class="created-at"></span>
      <span class="stars">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
        </svg>
        <span class="stars-count"></span>
      </span>
    </div>
  </div>
`;

class RepoCardInfosComponent extends HTMLElement {
  static get observedAttributes() {
    return [
      'repo-icon',
      'repo-name',
      'avatars',
      'pr-open',
      'pr-all',
      'pr-last',
      'issues-unresolved',
      'issues-all',
      'issues-last',
      'created-at',
      'stars'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._renderAll();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot.querySelector('.repo-name')) return;
    this._render(name, newValue);
  }

  _renderAll() {
    RepoCardInfosComponent.observedAttributes.forEach((name) => {
      this._render(name, this.getAttribute(name));
    });
  }

  _render(name, value) {
    const root = this.shadowRoot;
    value = value || '';

    switch (name) {
      case 'repo-icon':
        root.querySelector('.repo-icon').src = value;
        break;
      case 'repo-name':
        root.querySelector('.repo-name').textContent = value;
        break;
      case 'avatars': {
        const container = root.querySelector('.avatars');
        container.innerHTML = value
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
          .map((url) => `<img src="${url}" alt="" class="avatar">`)
          .join('');
        break;
      }
      case 'pr-open':
        root.querySelector('.pr-open').textContent = value;
        break;
      case 'pr-all':
        root.querySelector('.pr-all').textContent = value;
        break;
      case 'pr-last':
        root.querySelector('.pr-last').textContent = `"${value}"`;
        break;
      case 'issues-unresolved':
        root.querySelector('.issues-unresolved').textContent = value;
        break;
      case 'issues-all':
        root.querySelector('.issues-all').textContent = value;
        break;
      case 'issues-last':
        root.querySelector('.issues-last').textContent = `"${value}"`;
        break;
      case 'created-at':
        root.querySelector('.created-at').textContent = `Created at ${value}`;
        break;
      case 'stars':
        root.querySelector('.stars-count').textContent = value;
        break;
    }
  }
}

customElements.define('app-repo-card-infos', RepoCardInfosComponent);
export { RepoCardInfosComponent };