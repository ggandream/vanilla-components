import { Title } from "../Title/Title.js";
import { Button } from "./Button.js";

const card = document.querySelector(".card");

if (card) {
  const component = Button({
    variant: "primary",
    icon: "save",
    children: "Guardar",
  });

  const title = Title({ children: "Button" });

  card.innerHTML = `${title} ${component}`;
}
