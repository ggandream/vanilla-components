import { CodeBlock } from "../CodeBlock/CodeBlock.js";
import { Description } from "../Description/Description.js";
import { Title } from "../Title/Title.js";
import { Carousel } from "./Carousel.js";

const card = document.querySelector(".card");

if (card) {
  const component = Carousel({items: [1,2,3,4,5]});

  const title = Title({ children: "Carousel" });
  const description = Description({
    text: "A lightweight, accessible carousel component. Supports arrow navigation, indicator dots, and circular wrapping.",
  });

  const code = CodeBlock({
    code: await (await fetch("./Carousel.js")).text(),
    language: "js",
    variant: "button",
  });
  card.innerHTML = `${title} ${description} ${component} ${code}`;
}

const carouselCollection = document
  .querySelectorAll(".carousel")
  .forEach((carousel) => {
    const $btnRight = carousel.querySelector(".carousel__next--right");
    const $btnLeft = carousel.querySelector(".carousel__next--left");
    const $carouselItems = carousel.querySelectorAll(".carousel__item");
    const $carouselNav = carousel.querySelector(".carousel__nav");

    const buttonsHTML = Array.from($carouselItems, () => {
      return `<div class="carousel__button"></div>`;
    });

    $carouselNav.insertAdjacentHTML(
      "beforeend",
      `<div class="carousel__button-container">
        ${buttonsHTML.join("")}
        </div>`,
    );

    const $carouselButtons = carousel.querySelectorAll(".carousel__button");

    console.log($carouselItems)
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
      $carouselButtons.forEach((button) =>
        button.classList.remove("carousel__button--selected"),
      );
      $carouselItems[index].classList.add("carousel__item--selected");
      $carouselButtons[index].classList.add("carousel__button--selected");
    }

    function getCurrent() {
      const current =
        Array.from($carouselItems).findIndex((item) =>
          item.classList.contains("carousel__item--selected"),
        ) || 0;
      return Math.max(0,current);
    }
  });
