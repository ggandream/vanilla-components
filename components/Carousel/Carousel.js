import { icons } from "../../icons/icon.js";

export const Carousel = ({
  items = [1, 2],
  content = "text",
  label = "Carousel",
} = {}) => {
  const itemsHTML = items.map((item, i) => {
    return `<div class="carousel__item" role="group" aria-roledescription="slide"
              aria-label="${i + 1} of ${items.length}">
              ${content === "text" ? `<p>${item}</p>` : `<img src="${item}" alt="">`}
            </div>`;
  });

  const buttonsHTML = items.map((item, i) => {
    return `<li><button class="carousel__button" 
      aria-current="false"
      type="button"
       aria-label="Go to slide ${i + 1}"></button></li>`;
  });

  return `<section class="carousel" aria-roledescription="carousel" aria-label="${label}">
            <div class="carousel__item-container">
            ${itemsHTML.join("")}
            </div>
            <div class="carousel__nav">
              <div class="carousel__next-container">
                <button class="carousel__next carousel__next--left"
                aria-label="Previous slide"
                type="button">
                ${icons["chevron_left"]}
                </button>
                <button class="carousel__next carousel__next--right"
                aria-label="Next slide"
                type="button">
                ${icons["chevron_right"]}
                </button>
              </div>
              <ul class="carousel__button-container">
              ${buttonsHTML.join("")}
              </ul>
            </div>
          </section>`;
};
