import { icons } from "../../icons/icon.js";
import { ActionIcon } from "../ActionIcon/ActionIcon.js";

const copyBtn = ActionIcon({
  variant: "primary",
  icon: "copy",
  attributes: { "data-copy": "code-block" },
});

const copiedBtn = ActionIcon({
  variant: "primary hidden",
  icon: "check",
  attributes: { "data-copied": "code-block" },
});

export const CodeBlock = ({ code = "", language = "js", variant = "" }) => {
  const charHTML = (str) =>
    str
      .replace(/&/g, "$amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  return `<div class="code-block ${variant}">
  <div class="code-block__header"><span class="code-block__tag">${icons[language]}Demo.${language}</span> ${copyBtn}${copiedBtn}</div>
        <pre><code>${charHTML(code)}</code></pre></div>
`;
};
