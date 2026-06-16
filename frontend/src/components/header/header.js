const template = document.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="${new URL("./header.css", import.meta.url).href}">
  <header>
    <div class="logo desktop">Git Search</div>

    <div class="desktop">
      <div class="nav-right">
        <button class="icon-button github-btn" title="Git Hub">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.38-3.87-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.65.24 2.87.12 3.17.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56a11.53 11.53 0 0 0 7.86-10.95C23.5 5.74 18.27.5 12 .5z"/>
          </svg>
        </button>

        <button class="icon-button notification-btn" title="Notificações">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
        </button>

        <img
          class="profile-image"
          src="https://tse2.mm.bing.net/th/id/OIP.n98N2oHzhrYGYd-b6RAGRQHaGN"
          alt="Profile"
        />
      </div>
    </div>


    <button class="icon-button mobile" title="hamburguer">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="5" width="18" height="2" rx="1"/>
        <rect x="3" y="11" width="18" height="2" rx="1"/>
        <rect x="3" y="17" width="18" height="2" rx="1"/>
      </svg>
    </button>

    <div class="mobile">

      <div class="logo nav-right">Home</div>
    </div>
  </header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelectorAll(".github-btn")
      .forEach((btn) =>
        btn.addEventListener("click", () =>
          window.open("https://github.com", "_blank"),
        ),
      );

    const hamburgerBtn = this.shadowRoot.querySelector(".icon-button.mobile");
    hamburgerBtn.addEventListener("click", () => {
      if (!document.querySelector("app-sidebar")) {
        Promise.all([
          import("../sidebar/sidebar.js"),
          import("../sidebar-item/sidebar-item.js"),
        ]).then(() => {
          const sidebar = document.createElement("app-sidebar");

          const nav = document.createElement("app-sidebar-item");
          nav.items = [
            {
              label: "Home",
              href: "/",
              icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
            },
            {
              label: "Pull Requests",
              href: "/pullRequests",
              icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
            },
            {
              label: "Repositories",
              href: "/repositories",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                    </svg>`,
            },
            {
              label: "Issues",
              href: "/issues",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug" viewBox="0 0 16 16">
                      <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A5 5 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A5 5 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623M4 7v4a4 4 0 0 0 3.5 3.97V7zm4.5 0v7.97A4 4 0 0 0 12 11V7zM12 6a4 4 0 0 0-1.334-2.982A3.98 3.98 0 0 0 8 2a3.98 3.98 0 0 0-2.667 1.018A4 4 0 0 0 4 6z"/>
                    </svg>`,
            },
          ];

          sidebar.appendChild(nav);
          document.body.appendChild(sidebar);
          window.dispatchEvent(new CustomEvent("sidebar:open"));
        });
      } else {
        window.dispatchEvent(new CustomEvent("sidebar:open"));
      }
    });
  }
}

customElements.define("app-header", HeaderComponent);
export { HeaderComponent };
