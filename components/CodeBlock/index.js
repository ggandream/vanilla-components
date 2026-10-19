import { Title } from "../Title/Title.js";
import { CodeBlock } from "./CodeBlock.js";

const card = document.querySelector(".card");

if (card) {
  const component = CodeBlock({
    code: `function sayHello() { 
    console.log("Hello, World!"); 
    }`,
    language: "js",
    variant: "code-block",
  });

  const title = Title({ children: "Code-Block" });

  card.innerHTML = `${title} ${component}`;
}

const copyBtn = document.querySelector("[data-copy]");
const copiedBtn = document.querySelector("[data-copied]");

copyBtn.addEventListener("click", () => {
  const elementClass = copyBtn.getAttribute("data-copy");
  const codeCopied = document.querySelector(`.${elementClass}`);
  writeClipboardText(codeCopied.lastElementChild.textContent.trim());
  copyBtn.classList.add("hidden");
});
