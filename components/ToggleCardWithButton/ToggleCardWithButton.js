export const ToggleCardWithButton = ({
  title = "",
  image,
  altText,
  tag,
  frontText,
  backText,
  btnLabel,
} = {}) => {
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
                        ${tag ? `<span class="toggle-card__tag">${tag}</span>` : ""}
                        </div>
                        <p class="toggle-card__text">
                        ${frontText}
                        </p>
                        <button type="button" class="toggle-card__button" data-id="btn-front">
                        ${btnLabel || "Button"}
                        </button>
                    </div>
                    </article>
                    <article class="toggle-card__back">
                    <div class="toggle-card__content toggle-card__content--back">
                        <p class="toggle-card__text toggle-card__text--back">
                        ${backText}
                        </p>
                        <button type="button" class="toggle-card__button toggle-card__button--back" data-id="btn-back">
                        Go back
                        </button>
                    </div>
                    </article>
                </div>
            </div>`;
};
