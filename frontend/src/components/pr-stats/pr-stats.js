const template = document.createElement("template");

template.innerHTML = '';

class PrStatsComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow();
    }
}

customElements.define('app-pr-stats', PrStatsComponent);
export { PrStatsComponent };
