import { icons } from "../../icons/icon.js";
import { ActionIcon} from "../ActionIcon/ActionIcon.js";

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

const foldBtn = ActionIcon({
  variant: "primary",
  icon: "fold-down",
  attributes: {"data-id": "fold"}
});


export const CodeBlock = ({ code = "", language = "js", variant = "" }) => {
  const charHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .trim();

  return `<div class="code-block ${variant} collapse">
            <div class="code-block__header">
              <span class="code-block__tag">${icons[language]}Demo.${language}</span>
              <div class="btn-container">
              ${foldBtn}
               ${copyBtn}${copiedBtn}
               </div>
            </div>
            <pre><code class="language-js">${charHTML(code)}</code></pre>
          </div>
`;
};
