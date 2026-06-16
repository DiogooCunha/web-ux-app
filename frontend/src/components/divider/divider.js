const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./divider.css', import.meta.url).href}">
  <div class="divider">
    <span class="label"></span>
  </div>
`;

class DividerComponent extends HTMLElement {
  static get observedAttributes() {
    return ['label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.label').textContent = this.getAttribute('label') || '';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot.querySelector('.label')) return;
    if (name === 'label') this.shadowRoot.querySelector('.label').textContent = newValue || '';
  }
}

customElements.define('app-divider', DividerComponent);
export { DividerComponent };