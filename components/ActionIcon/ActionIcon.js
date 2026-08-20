import { icons } from "../../icons/icon.js";
export const ActionIcon = ({
  variant = "primary",
  icon,
  href,
  attributes = {},
} = {}) => {
  const otherAttrs = Object.entries(attributes)
    .map(([key, value]) => {
      return `${key}="${value}"`;
    })
    .join(" ");

  return href
    ? `<a class="action-icon action-icon--${variant}" href="${href}" ${otherAttrs}>
              <span class="action-icon__icon">${icons[icon]}</span>
            </a>`
    : `<button class="action-icon action-icon--${variant}" ${otherAttrs}>
              <span class="action-icon__icon">${icons[icon]}</span>
            </button>`;
};
