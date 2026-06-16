const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="${new URL("./pr-stats.css", import.meta.url).href}">
<span class="stat">
    <span class="dot dot--closed"></span>
    <span class="count" id="closed-count">23</span>
    <span>Closed</span>
</span>
 
<span class="stat">
    <span class="dot dot--approved"></span>
    <span class="count" id="approved-count">233</span>
    <span>Approved</span>
</span>
 
<span class="stat">
    <span class="dot dot--merged"></span>
    <span class="count" id="merged-count">233</span>
    <span>Merged</span>
</span>
`;

class PrStatsComponent extends HTMLElement {
  static get observedAttributes() {
    return ["approved", "closed", "merged"];
  }
 
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
 
  connectedCallback() {
    this._syncAll();
  }
 
  attributeChangedCallback(name, _oldVal, newVal) {
    const id = `${name}-count`;
    const el = this.shadowRoot.getElementById(id);
    if (el) el.textContent = newVal ?? "0";
  }
 
  _syncAll() {
    for (const attr of PrStatsComponent.observedAttributes) {
      const val = this.getAttribute(attr);
      if (val !== null) this.attributeChangedCallback(attr, null, val);
    }
  }
}
 
customElements.define("app-pr-stats", PrStatsComponent);
export { PrStatsComponent };
