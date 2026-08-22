const host = new URL(document.location.href);

export const components = [
  { page: "Home", url: `${host}/` },
  { page: "Button", url: `${host}/components/Button/` },
  { page: "ActionIcon", url: `${host}/components/ActionIcon/` },
  { page: "SearchButton", url: `${host}/components/SearchButton/` },
];
