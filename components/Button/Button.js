import { icons } from "../../icons/icon.js";

export const Button = ({
  variant = "primary",
  icon,
  children,
  href,
  attributes = {},
} = {}) => {
  const attrs = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join();

  return href
    ? `<a class="btn btn--${variant}" href="${href}" ${attrs}>
        <span class="btn__icon">${icons[icon]}</span>
        <span class="btn__text">${children}</span>
      </a>`
    : `<button class="btn btn--${variant}" ${attrs}>
        <span class="btn__icon">${icons[icon]}</span>
        <span class="btn__text">${children}</span>
       </button>`;
};
