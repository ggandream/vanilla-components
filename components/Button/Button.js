import { icons } from "../../icons/icon.js";

export const Button = ({
  variant = "primary",
  icon,
  children,
  attributes = {},
} = {}) => {
  return `<button class="btn btn--${variant}" ${attributes}>
            <span>${icon}</span><span>${children}</span>
          </button>`;
};
