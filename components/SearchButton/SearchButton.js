import { icons } from "../../icons/icon.js";

export const SearchButton = ({ shortcut = "", icon, attributes = {} } = {}) => {
  const otherAttrs = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  return `<button type="button" class="search__btn" ${otherAttrs}>
              <div>
                <span class="search__icon">${icons[icon]}</span>
                <span class="search__text">Search</span>
              </div>
              <span class="search__tag">${shortcut}</span>
            </button>`;
};
