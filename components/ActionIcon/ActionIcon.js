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
    ? `<a class="action-icon action-icon--${variant}" href="${href}" ${otherAttrs} data-icon="${icon}">
              <span class="action-icon__icon">${icons[icon]}</span>
            </a>`
    : `<button class="action-icon action-icon--${variant}" ${otherAttrs} data-icon="${icon}">
              <span class="action-icon__icon">${icons[icon]}</span>
            </button>`;
};

export const setIconActionIcon = (
  component,
  icon,
  addVariant,
  removeVariant,
) => {
  component.classList.add(`action-icon--${addVariant}`);
  component.classList.remove(`action-icon--${removeVariant}`);
  const iconContainer = component.querySelector(".action-icon__icon");
  iconContainer.innerHTML = `${icons[icon]}`;
  component.dataset.icon = icon;
};
