import { CodeBlock } from "./CodeBlock.js";

const card = document.querySelector(".card");

if (card) {
  const component = CodeBlock({ code: "Hola" });

  card.innerHTML = `${component}`;
}
