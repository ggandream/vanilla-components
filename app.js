import { ActionIcon } from "./components/ActionIcon/ActionIcon.js";
import { icons } from "./icons/icon.js";

const lightMode = ActionIcon({
  variant: "primary hidden",
  icon: "sun",
  attributes: { "data-id": "light-mode" },
});

const darkMode = ActionIcon({
  variant: "secondary",
  icon: "moon",
  attributes: { "data-id": "dark-mode" },
});

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
                        <nav class="nav">
                        <img
                            class="nav__logo"
                            src="../../assets/images/vanilla-logo.webp"
                            alt=""
                        />

                        ${darkMode} ${lightMode}

                        </nav>
                     </header>`;
  }
}
class SiteSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<aside>
                            <nav class="sidebar__menu">
                                <ul class="menu__list">
                                <li>
                                    <a class="list__link" href="/" onclick="route()">Home</a>
                                </li>
                                <li>
                                    <a class="list__link" href="components/Button/">Button</a>
                                </li>
                                <li>
                                    <a class="list__link" href="components/ActionIcon/">ActionIcon</a>
                                </li>
                                <li><a class="list__link" href="#">Title</a></li>
                                </ul>
                            </nav>
                        </aside>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-sidebar", SiteSidebar);

const html = document.querySelector("html");
const lightModeBtn = document.querySelector("[data-id='light-mode']");
const darkModeBtn = document.querySelector("[data-id='dark-mode']");

lightModeBtn.addEventListener("click", () => {
  html.setAttribute("data-theme", "0");
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
});

darkModeBtn.addEventListener("click", () => {
  html.setAttribute("data-theme", "dark");
  lightModeBtn.classList.remove("hidden");
  darkModeBtn.classList.add("hidden");
});
