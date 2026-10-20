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
  chevron_left: await loadIcon("chevron_left"),
  chevron_right: await loadIcon("chevron_right"),
  copy: await loadIcon("copy"),
  check: await loadIcon("check"),
  js: await loadIcon("js"),
};
