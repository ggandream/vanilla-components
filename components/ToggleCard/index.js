import { Title } from "../Title/Title.js";
import { ToggleCard } from "./ToggleCard.js";


const card = document.querySelector(".card");

if (card) {
  const component = ToggleCard({ title: "Trip to Antigua Guatemala",
    image: "../../assets/images/st-cathalina-arc.webp", 
    altText: "Cartoon winter mountain landscape",
    isOnSale: true,
    frontText: "Guatemala, Central America",
    backText: "Antigua Guatemala is a historic colonial city in the central highlands of Guatemala famous for its well-preserved Spanish Baroque architecture, cobblestone streets, and surrounding volcanoes.",
    btnLabel: "Book classic tour now"});

  const title = Title({ children: "Toggle Card" });

  card.innerHTML = `${title} ${component}`;
}
