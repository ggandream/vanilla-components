export const ToggleCard = ({ title = "", image, altText, isOnSale = false, frontText, backText, btnLabel } ={}) => {
  return `<div class="toggle-card__flip-container">
                <div class="toggle-card">
                    <article class="toggle-card__front">
                    <div class="toggle-card__image">
                        <img
                        src="${image}"
                        alt="${altText}"
                        />
                    </div>
                    <div class="toggle-card__content">
                        <div class="toggle-card__header">
                        <h1 class="toggle-card__title">
                            ${title}
                        </h1>
                        ${isOnSale ? `<span class="toggle-card__tag">ON SALE</span>` : ''}
                        </div>
                        <p class="toggle-card__text">
                        ${frontText}
                        </p>
                        <button type="button" class="toggle-card__button">
                        ${btnLabel || 'Button'}
                        </button>
                    </div>
                    </article>
                    <article class="toggle-card__back">
                    <div class="toggle-card__content toggle-card__content--back">
                        <p class="toggle-card__text toggle-card__text--back">
                        ${backText}
                        </p>
                    </div>
                    </article>
                </div>
            </div>`;
};
