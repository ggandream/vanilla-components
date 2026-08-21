export const NavList = ({ items = {}, variant = "" } = {}) => {
  return `<ul class="${variant}">${items
    .map(
      ({ page, url }) =>
        `<li><a class="list__link" href="${url}">${page}</a></li>`,
    )
    .join(" ")}
    </ul>`;
};
