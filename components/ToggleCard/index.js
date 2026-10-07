import { Title } from "../Title/Title.js";
import { ToggleCard } from "./ToggleCard.js";


const card = document.querySelector(".card");

if (card) {
  const component = ToggleCard({ title: "Norway Fjord Adventures",
    image: "../../assets/images/bg-8.webp", 
    altText: "Cartoon winter mountain landscape",
    isOnSale: true,
    frontText: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    backText: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    btnLabel: "Book classic tour now"});

  const title = Title({ children: "Toggle Card" });

  card.innerHTML = `${title} ${component}`;
}
