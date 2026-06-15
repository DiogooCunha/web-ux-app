const template = document.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="${new URL("./sidebar-item.css", import.meta.url).href}">
  <nav></nav>
`;

class SidebarItemComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._items = [];
  }

  set items(value) {
    this._items = value;
    this._render();
  }

  get items() {
    return this._items;
  }

  _render() {
    const nav = this.shadowRoot.querySelector("nav");
    nav.innerHTML = this._items.map(({ icon, label, href }) => `
      <a href="${href}">
        <span class="icon">${icon}</span>
        <span>${label}</span>
      </a>
    `).join("");
  }
}

customElements.define("app-sidebar-item", SidebarItemComponent);
export { SidebarItemComponent };
