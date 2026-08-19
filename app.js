class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
                        <nav class="nav">
                        <img
                            class="nav__logo"
                            src="../../assets/images/vanilla-logo.webp"
                            alt=""
                        />
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
                                    <a class="list__link link--active" href="components/Button/">Button</a>
                                </li>
                                <li><a class="list__link" href="#">Title</a></li>
                                </ul>
                            </nav>
                        </aside>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-sidebar", SiteSidebar);
