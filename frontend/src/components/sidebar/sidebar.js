const template = document.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="${new URL("./sidebar.css", import.meta.url).href}">
  <div class="overlay"></div>
  <div class="panel">
    <button class="close-btn" title="Close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
    <slot></slot>
  </div>
`;

class SidebarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._onOpen = () => this.open();
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".overlay").addEventListener("click", () => this.close());
    this.shadowRoot.querySelector(".close-btn").addEventListener("click", () => this.close());
    window.addEventListener("sidebar:open", this._onOpen);
  }

  disconnectedCallback() {
    window.removeEventListener("sidebar:open", this._onOpen);
  }

  open() {
    this.classList.add("open");
  }

  close() {
    this.classList.remove("open");
  }
}

customElements.define("app-sidebar", SidebarComponent);
export { SidebarComponent };
