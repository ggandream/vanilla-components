async function loadIcon(name) {
  const response = await fetch(new URL(`./${name}.svg`, import.meta.url));
  return response.text();
}

const iconArray = ["save","github", "search", "sun",
                "moon", "chevron", "chevron_left",
                "chevron_right", "copy", "check", "js", "fold-down", "fold-up"];

const svgs = await Promise.all(iconArray.map((icon) => loadIcon(icon)));
  
export const icons = Object.fromEntries(iconArray.map((icon,i) => [icon,svgs[i]]));

// export const icons = {
//   save: await loadIcon("save"),
//   github: await loadIcon("github"),
//   search: await loadIcon("search"),
//   sun: await loadIcon("sun"),
//   moon: await loadIcon("moon"),
//   chevron: await loadIcon("chevron"),
//   chevron_left: await loadIcon("chevron_left"),
//   chevron_right: await loadIcon("chevron_right"),
//   copy: await loadIcon("copy"),
//   check: await loadIcon("check"),
//   js: await loadIcon("js"),
// };
