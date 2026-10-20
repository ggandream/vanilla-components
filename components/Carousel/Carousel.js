import { icons } from "../../icons/icon.js";

export const Carousel = ({ items = [1,2,3,4,5] , content = "text"}) => {

  const itemsHTML = items.map((item) => {
    return `<div class="carousel__item">${content === "text" ? `<p>${item}</p>` :`<img src="${item} alt="">`}</div>`
  })

  return `<div class="carousel">
            ${itemsHTML.join("")}
            <div class="carousel__nav">
              <div class="carousel__next-container">
                <button class="carousel__next carousel__next--left">
                ${icons["chevron_left"]}
                </button>
                <button class="carousel__next carousel__next--right">
                ${icons["chevron_right"]}
                </button>
              </div>
            </div>
          </div>`;
};
