import { Title } from "../Title/Title.js";
import { SearchButton } from "./SearchButton.js";

const card = document.querySelector(".card");

if (card) {
  const component = SearchButton({
    shortcut: "Ctrl + k",
    icon: "search",
    attributes: { command: "show-modal", commandfor: "search__dialog" },
  });

  const title = Title({ children: "SearchButton" });

  card.insertAdjacentHTML("afterbegin", `${title} ${component}`);
}

const searchBtns = document.querySelectorAll(".search__btn");

searchBtns.forEach((searchBtn) => {
  searchBtn.addEventListener("click", () => {
    console.log("Search Btn");
  });
});
