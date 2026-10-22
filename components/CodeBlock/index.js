import { setIcon_ActionIcon } from "../ActionIcon/ActionIcon.js";
import { Title } from "../Title/Title.js";
import { CodeBlock } from "./CodeBlock.js";
import { writeClipboardText } from "./writeClipboardText.js";

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

const codeBlock = document.querySelector(".code-block");

copyBtn.addEventListener("click", () => {
  const elementClass = copyBtn.getAttribute("data-copy");
  const codeCopied = document.querySelector(`.${elementClass}`);
  writeClipboardText(codeCopied.lastElementChild.textContent.trim());
  copyBtn.classList.add("hidden");
});

const foldBtn = document.querySelector("[data-id='fold']");

if(foldBtn){
  foldBtn.addEventListener("click", () => {
    
    if(foldBtn.dataset.icon === "fold-down"){
      setIcon_ActionIcon(foldBtn,"fold-up");
      codeBlock.classList.remove("collapse");
    } else {
      setIcon_ActionIcon(foldBtn,"fold-down");
      codeBlock.classList.add("collapse");
    }
  })
}

