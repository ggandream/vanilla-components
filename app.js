import { ActionIcon } from "./components/ActionIcon/ActionIcon.js";
import { NavList } from "./components/NavList/NavList.js";
import { SearchButton } from "./components/SearchButton/SearchButton.js";
import { SearchModal } from "./components/SearchModal/SearchModal.js";
import { components } from "./data/components.js";

let localMode = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "0";

let logoURL = new URL(
  `./assets/images/vanilla-logo-${localMode}.webp`,
  import.meta.url,
);

const navList = NavList({ items: components, variant: "menu__list" });

const lightMode = ActionIcon({
  variant: "light",
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
const sidebarLinks = document.querySelectorAll(".list__link--menu__list");
const logo = document.querySelector(".nav__logo");

// ACTIVE PAGE ON SIDEBAR
const currentPage = document.location.pathname.split("/");

sidebarLinks.forEach((sidebarLink) => {
  if (sidebarLink.textContent === currentPage[2]) {
    sidebarLink.classList.add("link--active");
  } else if (
    sidebarLink.textContent === "Home" &&
    currentPage[2] === undefined
  ) {
    sidebarLink.classList.add("link--active");
  }
});

// THEME OR MODE FEATURE
lightModeBtn.addEventListener("click", () => {
  html.setAttribute("data-theme", "0");
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
  localStorage.setItem("theme", "0");
  logoURL = new URL(`./assets/images/vanilla-logo-0.webp`, import.meta.url);
  logo.setAttribute("src", logoURL);
});

darkModeBtn.addEventListener("click", () => {
  html.setAttribute("data-theme", "dark");
  lightModeBtn.classList.remove("hidden");
  darkModeBtn.classList.add("hidden");
  localStorage.setItem("theme", "dark");
  logoURL = new URL(`./assets/images/vanilla-logo-dark.webp`, import.meta.url);
  logo.setAttribute("src", logoURL);
});

if (localMode) html.setAttribute("data-theme", localMode);
if (localMode === "0") {
  lightModeBtn.classList.add("hidden");
} else {
  darkModeBtn.classList.add("hidden");
}
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
