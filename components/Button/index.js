import { setIcon_ActionIcon } from "../ActionIcon/ActionIcon.js";
import { CodeBlock } from "../CodeBlock/CodeBlock.js";
import { writeClipboardText } from "../CodeBlock/writeClipboardText.js";
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
    variant: "code-block--button",
  });
  card.innerHTML = `${title} ${description} ${component} ${code}`;

  const copyBtn = document.querySelector("[data-copy]");

  copyBtn.addEventListener("click", () => {
    const elementClass = copyBtn.getAttribute("data-copy");
    const codeCopied = document.querySelector(`.${elementClass}`);
    writeClipboardText(codeCopied.lastElementChild.textContent.trim());
    copyBtn.classList.add("hidden");
  });
}

const codeBlock = document.querySelector(".code-block--button");
const foldBtn = document.querySelector("[data-action='fold']");
const foldDownBtn = document.querySelector(".btn__expand-code");

if (foldBtn) {
    foldBtn.addEventListener("click", () => {
      if (foldBtn.dataset.icon === "fold-down") {
        setIcon_ActionIcon(foldBtn, "fold-up");
        codeBlock.classList.remove("collapse");
      } else {
        setIcon_ActionIcon(foldBtn, "fold-down");
        codeBlock.classList.add("collapse");
         foldDownBtn.parentElement.classList.remove("hidden");
      }
    });
}

if(foldDownBtn){
  foldDownBtn.addEventListener("click", () => {
    if(foldBtn.dataset.icon === "fold-down"){
      setIcon_ActionIcon(foldBtn,"fold-up");
      codeBlock.classList.remove("collapse");
    } else {
      setIcon_ActionIcon(foldBtn,"fold-down");
      codeBlock.classList.add("collapse");
    }
    foldDownBtn.parentElement.classList.add("hidden");
  })
  
}
