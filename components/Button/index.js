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

  const code = CodeBlock({code: 
`export const Button = ({
  variant = "primary",
  icon,
  children,
  href,
  attributes = {},
} = {}) => {
  const attrs = Object.entries(attributes)
    .map(([key, value]) => '{key}="{value}"')
    .join(" ");

  return href
    ? '<a class="btn btn--{variant}" href="{href}" {attrs}>
        <span class="btn__icon">{icons[icon]}</span>
        <span class="btn__text">{children}</span>
      </a>'
    : '<button class="btn btn--{variant}" {attrs}>
        <span class="btn__icon">{icons[icon]}</span>
        <span class="btn__text">{children}</span>
       </button>';
};`, language: "js", variant: "button" });

  card.innerHTML = `${title} ${description} ${component} ${code}`;
}
