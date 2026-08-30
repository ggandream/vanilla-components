import {
  ActionIcon,
  setIconActionIcon,
} from "./components/ActionIcon/ActionIcon.js";
import { NavList } from "./components/NavList/NavList.js";
import { SearchButton } from "./components/SearchButton/SearchButton.js";
import { SearchModal } from "./components/SearchModal/SearchModal.js";
import { components } from "./data/components.js";

const LIGHT_MODE = "0";
const DARK_MODE = "dark";

let localMode = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : LIGHT_MODE;

let logoURL = new URL(
  `./assets/images/vanilla-logo-${localMode}.webp`,
  import.meta.url,
);

const navList = NavList({ items: components, variant: "menu__list" });

const mobileNavList = NavList({ items: components, variant: "mobile" });

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

const gitHub = ActionIcon({
  variant: "primary",
  icon: "github",
  href: "https://github.com/ggandream/vanilla-components",
  attributes: {
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Github",
  },
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
                        <div class="nav__btns nav__btns--right">
                        
                        <button type="button" class="mobile__menu-btn"
                        aria-label="open main menu"
                        aria-expanded="false"
                        aria-controls="mobile-menu"
                        
                        >
                          <div></div>
                          <div></div>
                          <div></div>
                        </button>
                        <img
                            class="nav__logo"
                            src="${logoURL}"
                            alt=""
                        />
                        </div>
                        <div class="nav__btns">
                        ${searchBtn}
                         ${darkMode} ${lightMode} ${gitHub}
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

class SiteMobileMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div
                        class="mobile__menu-container hidden"
                        id="mobile__menu"
                        aria-hidden="true"
                      >
                        <nav class="mobile__nav">
                        ${mobileNavList}
                        </nav>
                      </div>`;
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
customElements.define("site-mobile-menu", SiteMobileMenu);

const html = document.querySelector("html");
const lightModeBtn = document.querySelector("[data-id='light-mode']");
const darkModeBtn = document.querySelector("[data-id='dark-mode']");
const searchInputs = document.querySelectorAll(".search__input");
const componentsLinks = document.querySelectorAll(
  ".list__link--search__components",
);
const sidebarLinks = document.querySelectorAll(".list__link--menu__list");
const logo = document.querySelector(".nav__logo");
const mobileMenuBtn = document.querySelector(".mobile__menu-btn");
const mobileMenu = document.querySelector("#mobile__menu");

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
  html.setAttribute("data-theme", LIGHT_MODE);
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
  localStorage.setItem("theme", LIGHT_MODE);
  logoURL = new URL(`./assets/images/vanilla-logo-0.webp`, import.meta.url);
  logo.setAttribute("src", logoURL);
});

darkModeBtn.addEventListener("click", () => {
  html.setAttribute("data-theme", DARK_MODE);
  lightModeBtn.classList.remove("hidden");
  darkModeBtn.classList.add("hidden");
  localStorage.setItem("theme", DARK_MODE);
  logoURL = new URL(`./assets/images/vanilla-logo-dark.webp`, import.meta.url);
  logo.setAttribute("src", logoURL);
});

if (localMode) html.setAttribute("data-theme", localMode);
if (localMode === LIGHT_MODE) {
  lightModeBtn.classList.add("hidden");
} else {
  darkModeBtn.classList.add("hidden");
}

// SEARCH FEATURE
searchInputs.forEach((searchInput) => {
  searchInput.addEventListener("input", (e) => {
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

// MOBILE MENU
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenuBtn.classList.toggle("mobile__menu-btn--close");

  const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
  mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);

  const isHidden = mobileMenu.getAttribute("aria-hidden");
  mobileMenu.setAttribute("aria-hidden", !isHidden);
});
