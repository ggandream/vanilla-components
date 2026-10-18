import { CodeBlock } from "../CodeBlock/CodeBlock.js";
import { Description } from "../Description/Description.js";
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
  const description = Description({
    text: "Button component to render button or link",
  });

  const code = CodeBlock({
    code: await (await fetch("./Button.js")).text(),
    language: "js",
    variant: "button",
  });
  card.innerHTML = `${title} ${description} ${component} ${code}`;
}
