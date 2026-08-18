<p align="center">
  <img src="./assets/images/vanilla-logo.webp" alt="Vanilla Components" width="320" />
</p>

# Vanilla Components

A collection of reusable UI components built with **pure HTML, CSS, and JavaScript** — no frameworks, no libraries, no build tools required.

## Purpose

This project exists to explore and strengthen core web development fundamentals by building common UI patterns from scratch, without relying on frameworks like React, Vue, or Angular. Each component is implemented using only native browser APIs and standard web technologies.

The goals are to:

- **Practice fundamentals** — deepen understanding of the DOM, CSS layout, and vanilla JavaScript by solving problems frameworks usually abstract away.
- **Keep things dependency-free** — every component works with zero external packages, making it easy to drop into any project.
- **Encourage reusability** — each component is self-contained and can be copied directly into other projects with minimal adaptation.
- **Document real patterns** — serve as a personal reference and portfolio of solutions to common UI challenges (modals, accordions, carousels, tabs, tooltips, etc.).

## Status

Early work in progress. The showcase shell — header, sidebar navigation, and content area — is in place; the components themselves are still being built.

| Component | Status |
| --------- | ------ |
| Tabs      | In progress — folder scaffolded, styles not yet written |
| Combobox  | Planned — listed in the sidebar, not yet scaffolded |

## Structure

A single page acts as the showcase. It loads the shared shell styles plus the stylesheet of each component, and every component keeps its own files under `components/`:

```
vanilla-components/
├── index.html              # showcase page: header, sidebar nav, content area
├── styles.css              # shell layout, @font-face declarations, shared tokens
├── app.js                  # shared behaviour (navigation, component wiring)
├── components/
│   └── Tabs/
│       └── tabs.css        # styles scoped to the Tabs component
├── icons/
└── assets/
    ├── fonts/Elms_Sans/    # Elms Sans, bundled under the SIL Open Font License
    └── images/
        └── vanilla-logo.webp
```

Each component folder is named in `PascalCase` and holds its own `<name>.css` — and, once a component needs behaviour, its own `<name>.js`.

## Running it locally

No installation, build step, or package manager required.

Opening `index.html` directly in a browser works, but serving the folder over HTTP is more reliable — `file://` restrictions can block the bundled fonts. Any static server will do, for example:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## How to reuse a component

1. Copy the component's folder from `components/`.
2. Copy the markup for the component out of `index.html`.
3. Link its stylesheet (and script, if it has one) from your own page.
4. Adjust class names, styles, or markup as needed to fit your context.

Components rely on the shared design values in `styles.css` — the font family and colour palette — so bring those across too, or map them onto your own.

## Tech stack

- **HTML5** — semantic, accessible markup
- **CSS3** — modern layout techniques (Flexbox, Grid, custom properties)
- **JavaScript (ES6+)** — vanilla DOM manipulation, no external libraries
- **Elms Sans** — self-hosted typeface, included under the SIL Open Font License (see `assets/fonts/Elms_Sans/OFL.txt`)
