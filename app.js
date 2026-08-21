import { ActionIcon } from "./components/ActionIcon/ActionIcon.js";
import { NavList } from "./components/NavList/NavList.js";
import { SearchButton } from "./components/SearchButton/SearchButton.js";
import { components } from "./data/components.js";

const navList = NavList({ items: components, variant: "menu__list" });

const lightMode = ActionIcon({
  variant: "light hidden",
  icon: "sun",
  attributes: { "data-id": "light-mode" },
});

const darkMode = ActionIcon({
  variant: "dark",
  icon: "moon",
  attributes: { "data-id": "dark-mode" },
});

const searchBtn = SearchButton({
  shortcut: "Ctrl + k",
  icon: "search",
  attributes: { command: "show-modal", commandfor: "search__dialog" },
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
                        <div class="nav__btns">
                        ${searchBtn}
                        ${darkMode} ${lightMode}
                        </div>

                        </nav>
                     </header>`;
  }
}
class SiteSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<aside>
                            <nav class="sidebar__menu">
                                ${navList}
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
