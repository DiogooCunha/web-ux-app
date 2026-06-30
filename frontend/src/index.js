import { Header } from "./components/header/index.js";
import { RepoCard } from "./components/card/index.js";
import { Divider } from "./components/divider/index.js";
import { FormLogin } from "./components/form-login/index.js";
import { PrStats } from "./components/pr-stats/index.js";
import { RepoInfo } from "./components/repo-card-infos/index.js"

customElements.define("app-header", Header);
customElements.define("app-card", RepoCard);
customElements.define("app-divider", Divider);
customElements.define("app-form-login", FormLogin);
customElements.define("app-pr-stats", PrStats);
customElements.define("app-repo-card-infos", RepoInfo);

console.log("App initialized and components registered.");
