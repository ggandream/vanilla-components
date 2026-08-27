const root = new URL("../", import.meta.url);
export const components = [
  { page: "Home", url: ` ${root}` },
  { page: "Button", url: ` ${root}components/Button/` },
  { page: "ActionIcon", url: ` ${root}components/ActionIcon/` },
  { page: "SearchButton", url: ` ${root}components/SearchButton/` },
  { page: "Accordion", url: ` ${root}components/Accordion/` },
  { page: "CodeBlock", url: ` ${root}components/CodeBlock/` },
];
