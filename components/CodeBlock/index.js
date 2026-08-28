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
const copiedBtn = document.querySelector("[data-copied]");

copyBtns.forEach((copyBtn, i) => {
  copyBtn.addEventListener("click", (e) => {
    const elementClass = copyBtn.getAttribute("data-copy");
    const codeCopied = document.querySelector(`.${elementClass}`);
    writeClipboardText(codeCopied.lastElementChild.textContent.trim(), i);
    copyBtn.classList.add("hidden");
  });
});

async function writeClipboardText(text, btnIndex) {
  try {
    await navigator.clipboard.writeText(text);
    copiedBtn.classList.remove("hidden");
  } catch (error) {
    console.error(error.message);
  } finally {
    copyBtns[btnIndex].classList.remove("hidden");
    copiedBtn.classList.add("hidden");
  }
}
