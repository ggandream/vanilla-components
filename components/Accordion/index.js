import articles from "../../data/articles.json" with { type: "json" };
import { Title } from "../Title/Title.js";
import { Accordion } from "./Accordion.js";

const card = document.querySelector(".card");

if (card) {
  const component = Accordion({ items: articles, icon: "chevron" });

  const title = Title({ children: "Accordion" });

  card.innerHTML = `${title} ${component}`;
}

const accordionTitles = document.querySelectorAll(".accordion__summary");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("accordion__summary"))
      e.target.lastElementChild.classList.toggle("accordion__icon--open");

    if (e.target.parentElement.classList.contains("accordion__summary"))
      e.target.nextElementSibling.classList.toggle("accordion__icon--open");

    if (e.target.parentElement.classList.contains("accordion__icon"))
      e.target.parentElement.classList.toggle("accordion__icon--open");

    if (
      e.target.parentElement.parentElement.classList.contains("accordion__icon")
    )
      e.target.parentElement.parentElement.classList.toggle(
        "accordion__icon--open",
      );
  });
});
