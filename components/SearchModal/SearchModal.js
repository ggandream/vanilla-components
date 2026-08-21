import { icons } from "../../icons/icon.js";
import { NavList } from "../NavList/NavList.js";

export const SearchModal = ({ icon, items = [], variant = "", id }) => {
  const navList = NavList({ items: items, variant: variant });
  return `<dialog id="${id}" closedby="any" class="search__dialog">
              <div class="search__entry">
                <span class="search__icon"
                  >${icons[icon]}</span>
                <input
                  class="search__input"
                  name="search__input"
                  type="search"
                  placeholder="Search component"
                />
              </div>
              ${navList}
            </dialog>`;
};
