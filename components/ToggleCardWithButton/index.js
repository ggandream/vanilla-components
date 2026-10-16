import { Title } from "../Title/Title.js";
import { ToggleCardWithButton } from "./ToggleCardWithButton.js";

const card = document.querySelector(".card");

if (card) {
  const component = ToggleCardWithButton({
    title: "La Merced Church",
    image: "../../assets/images/merced-church.webp",
    altText: "Cartoon winter mountain landscape",
    tag: "Antigua Guatemala",
    frontText:
      "It is a striking yellow, earthquake-resistant Baroque landmark built between 1749 and 1767 by architect Juan de Dios Estrada.",
    backText:
      `The church that you see today was inaugurated in 1767, commissioned by the Mercedarians and designed by architect Juan de Dios Estrada, using building techniques designed to withstand earthquakes. Low and concentrated thick walls at the base, small and high windows, buttresses to reinforce the structure, were the primary reasons that the church fared so well during the earthquake six years later in 1773.`,
    btnLabel: "More info...",
  });

  const title = Title({ children: "Toggle Card With Button" });

  card.innerHTML = `${title} ${component}`;
}

const toggleCard = document.querySelector(".toggle-card__flip-container");

card.addEventListener("click", (e) => {
  if (e.target.matches("[data-id='btn-front']")) {
    toggleCard.firstElementChild.classList.add("flip");
  }

  if (e.target.matches("[data-id='btn-back']")) {
    toggleCard.firstElementChild.classList.remove("flip");
  }
});
