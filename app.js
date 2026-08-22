import { ActionIcon } from "./components/ActionIcon/ActionIcon.js";
import { NavList } from "./components/NavList/NavList.js";
import { SearchButton } from "./components/SearchButton/SearchButton.js";
import { SearchModal } from "./components/SearchModal/SearchModal.js";
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
  command: "show-modal",
  commandfor: "search__dialog",
});

const searchModal = SearchModal({
  icon: "search",
  items: components,
  variant: "search__components",
  id: "search__dialog",
});

const logoURL = new URL("/assets/images/vanilla-logo.webp", import.meta.url);
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
                        <nav class="nav">
                        <img
                            class="nav__logo"
                            src="${logoURL}"
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

class SiteSearch extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `${searchModal}`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-sidebar", SiteSidebar);
customElements.define("site-search", SiteSearch);

const html = document.querySelector("html");
const lightModeBtn = document.querySelector("[data-id='light-mode']");
const darkModeBtn = document.querySelector("[data-id='dark-mode']");
const searchInputs = document.querySelectorAll(".search__input");
const componentsLinks = document.querySelectorAll(
  ".list__link--search__components",
);

// const url = new URL(document.location.href);
// console.log(document.location.host);

// THEME OR MODE FEATURE
lightModeBtn.addEventListener("click", () => {
  html.setAttribute("data-theme", "0");
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
  localStorage.setItem("theme", "0");
});

darkModeBtn.addEventListener("click", () => {
  html.setAttribute("data-theme", "dark");
  lightModeBtn.classList.remove("hidden");
  darkModeBtn.classList.add("hidden");
  localStorage.setItem("theme", "dark");
});

const localMode = localStorage.getItem("theme");

if (localMode) html.setAttribute("data-theme", localMode);

// SEARCH FEATURE

searchInputs.forEach((searchInput) => {
  searchInput.addEventListener("input", (e) => {
    console.log(e.target.value);
    componentsLinks.forEach((link) =>
      link.parentElement.classList.remove("hidden"),
    );
    Array.from(componentsLinks)
      .filter(
        (link) =>
          !link.textContent
            .toLowerCase()
            .includes(e.target.value.toLowerCase()),
      )
      .map((link) => link.parentElement.classList.add("hidden"));
  });
});
