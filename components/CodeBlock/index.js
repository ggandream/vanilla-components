import { Title } from "../Title/Title.js";
import { CodeBlock } from "./CodeBlock.js";

const card = document.querySelector(".card");

if (card) {
  const component = CodeBlock({
    code: `function sayHello() { console.log("Hello, World!"); }`,
    language: "js",
    variant: "code-block",
  });

  const title = Title({ children: "Code-Block" });

  card.innerHTML = `${title} ${component}`;
}

const copyBtns = document.querySelectorAll("[data-copy]");

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener("click", (e) => {
    const elementClass = copyBtn.getAttribute("data-copy");
    const codeCopied = document.querySelector(`.${elementClass}`);
    writeClipboardText(codeCopied.lastElementChild.textContent.trim());
  });
});

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  } finally {
  }
}
