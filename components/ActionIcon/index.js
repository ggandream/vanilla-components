import { Title } from "../Title/Title.js";
import { ActionIcon } from "./ActionIcon.js";

const card = document.querySelector(".card");

if (card) {
  const component = ActionIcon({
    variant: "primary",
    icon: "sun",
  });

  const title = Title({ children: "ActionIcon" });

  card.innerHTML = `${title} ${component}`;
}
