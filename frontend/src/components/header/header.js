const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./header.css', import.meta.url).href}">
  <header>
    <div class="logo">Git Search</div>

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
  </header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelectorAll('.github-btn')
      .forEach(btn =>
        btn.addEventListener('click', () =>
          window.open('https://github.com', '_blank')
        )
      );

    this.menuIcon = this.shadowRoot.querySelector('.menu-icon');
  }
}

export { HeaderComponent };

