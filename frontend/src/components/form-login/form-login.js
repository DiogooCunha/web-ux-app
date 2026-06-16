const template = document.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="${new URL("./form-login.css", import.meta.url).href}">
  <section class="login">
    <div class="login-content">
      <div class="login-logo" aria-hidden="true">
        <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="53" cy="53" r="35" stroke="#000000" stroke-width="8"/>
          <path d="M78 78L114 114" stroke="#000000" stroke-width="10" stroke-linecap="round"/>
          <path d="M98 89L120 111L108 123L86 101L98 89Z" fill="#000000"/>
        </svg>
      </div>

      <h1 class="login-title">GitSearch</h1>
      <p class="login-subtitle">Bem-vindo ao GitSearch</p>
      <p class="login-text">Acesse sua conta para começar</p>

      <button class="login-button" type="button">
        <span class="login-button-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.18a10.97 10.97 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.45-2.69 5.42-5.25 5.71.42.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12.02C23.5 5.66 18.35.5 12 .5Z"/>
          </svg>
        </span>
        <span class="login__button-text">Entrar com GitHub</span>
      </button>
    </div>
  </section>
`;

class FormLoginComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-form-login", FormLoginComponent);
export { FormLoginComponent };
