async function loadIcon(name) {
  const response = await fetch(new URL(`./${name}.svg`, import.meta.url));
  return response.text();
}

export const icons = {
  save: await loadIcon("save"),
  github: await loadIcon("github"),
  search: await loadIcon("search"),
  sun: await loadIcon("sun"),
  moon: await loadIcon("moon"),
  search: await loadIcon("search"),
  chevron: await loadIcon("chevron"),
  copy: await loadIcon("copy"),
  js: await loadIcon("js"),
};
