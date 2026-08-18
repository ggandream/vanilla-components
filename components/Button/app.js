import { Button } from "./Button.js";

const card = document.querySelector(".card");

if (card) {
  card.innerHTML = Button({
    variant: "primary",
    icon: "save",
    children: "Guardar",
  });
}
