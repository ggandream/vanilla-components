let host = new URL(document.location.host);

if (document.location.href.includes("github")) {
  host = new URL(document.location.host + "vanilla-components/");
}
export const components = [
  { page: "Home", url: `${host}/` },
  { page: "Button", url: `${host}/components/Button/` },
  { page: "ActionIcon", url: `${host}/components/ActionIcon/` },
  { page: "SearchButton", url: `${host}/components/SearchButton/` },
];
