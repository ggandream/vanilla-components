import { setIcon_ActionIcon } from "../ActionIcon/ActionIcon.js";
import { CodeBlock } from "../CodeBlock/CodeBlock.js";
import { writeClipboardText } from "../CodeBlock/writeClipboardText.js";
import { Description } from "../Description/Description.js";
import { Title } from "../Title/Title.js";
import { Carousel } from "./Carousel.js";

const card = document.querySelector(".card");

if (card) {
  const component = Carousel({ items: [1, 2, 3, 4, 5] });

  const title = Title({ children: "Carousel" });
  const description = Description({
    text: "A lightweight, accessible carousel component. Supports arrow navigation, indicator dots, and circular wrapping.",
  });

  const code = CodeBlock({
    code: await (await fetch("./Carousel.js")).text(),
    language: "js",
    variant: "code-block--carousel",
  });
  card.innerHTML = `${title} ${description} ${component} ${code}`;
}

const copyBtn = document.querySelector("[data-copy]");

copyBtn.addEventListener("click", () => {
  const elementClass = copyBtn.getAttribute("data-copy");
  const codeCopied = document.querySelector(`.${elementClass}`);
  writeClipboardText(codeCopied.firstElementChild.nextElementSibling.textContent.trim());
  copyBtn.classList.add("hidden");
});

const codeBlock = document.querySelector(".code-block--carousel");
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

if (foldDownBtn) {
  foldDownBtn.addEventListener("click", () => {
    if (foldBtn.dataset.icon === "fold-down") {
      setIcon_ActionIcon(foldBtn, "fold-up");
      codeBlock.classList.remove("collapse");
    } else {
      setIcon_ActionIcon(foldBtn, "fold-down");
      codeBlock.classList.add("collapse");
    }
    foldDownBtn.parentElement.classList.add("hidden");
  });
}

document.querySelectorAll(".carousel").forEach((carousel) => {
  const $btnRight = carousel.querySelector(".carousel__next--right");
  const $btnLeft = carousel.querySelector(".carousel__next--left");
  const $carouselItems = carousel.querySelectorAll(".carousel__item");
  const $carouselButtons = carousel.querySelectorAll(".carousel__button");

  //Fix first item as selected
  goTo(getCurrent());

  //BUTTONS
  $carouselButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
      goTo(i);
    });
  });

  //NEXT
  $btnRight.addEventListener("click", () => {
    let current = getCurrent();
    if (current === $carouselItems.length - 1) {
      current = -1;
    }
    goTo(current + 1);
  });

  //PREVIOUS
  $btnLeft.addEventListener("click", () => {
    let current = getCurrent();
    if (current === 0) {
      current = $carouselItems.length;
    }
    goTo(current - 1);
  });

  //GO TO THAT SPECIFIC ITEM
  function goTo(index) {
    $carouselItems.forEach((item) => {
      item.classList.remove("carousel__item--selected");
    });
    $carouselButtons.forEach((button) => {
      button.classList.remove("carousel__button--selected");
      button.removeAttribute("aria-current");
    });
    $carouselItems[index].classList.add("carousel__item--selected");
    $carouselButtons[index].setAttribute("aria-current", "true");
    $carouselButtons[index].classList.add("carousel__button--selected");
  }

  function getCurrent() {
    const current = Array.from($carouselItems).findIndex((item) =>
      item.classList.contains("carousel__item--selected"),
    );
    return Math.max(0, current);
  }
});
