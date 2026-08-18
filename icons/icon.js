async function loadIcon(name) {
  const response = await fetch(`../../icons/${name}.svg`);
  return response.text();
}

export const icons = {
  save: await loadIcon("save"),
  github: await loadIcon("github"),
  search: await loadIcon("search"),
};
