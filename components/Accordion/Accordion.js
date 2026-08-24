import { icons } from "../../icons/icon.js";

export const Accordion = ({ items = {}, icon } = {}) => {
  const details = items
    .map((item) => {
      return `<details class="accordion__detail">
                <summary class="accordion__summary">
                  <span class="accordion__title">${item.title}</span>
                  <span class="accordion__icon">${icons[icon]}</span>
                </summary>
                <p class="accordion__text">
                ${item.explanation}
                </p>
              </details>`;
    })
    .join(" ");

  return `<div class="accordion">${details}</div>`;
};
