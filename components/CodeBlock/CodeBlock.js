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
  attributes: {"data-action": "fold"}
});


export const CodeBlock = ({ code = "", language = "js", variant = "" }) => {
  const charHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .trim();

      let codeBlockHTML = '';
      if(code.length <= 140){
        codeBlockHTML = `<div class="code-block ${variant}">
                            <div class="code-block__header">
                              <span class="code-block__tag">${icons[language]}Demo.${language}</span>
                              <div class="btn-container">
                              ${copyBtn}${copiedBtn}
                              </div>
                            </div>
                            <pre><code class="language-js">${charHTML(code)}</code></pre>
                          </div>`
      }else{
        codeBlockHTML = `<div class="code-block ${variant} collapse">
                            <div class="code-block__header">
                              <span class="code-block__tag">${icons[language]}Demo.${language}</span>
                              <div class="btn-container">
                              ${foldBtn}
                              ${copyBtn}${copiedBtn}
                              </div>
                            </div>
                            <pre><code class="language-js">${charHTML(code)}</code></pre>
                            <div class="code-block__expand-code"><button type="button" class="btn__expand-code">Expand code</button></div>
                          </div>`
      }

  return codeBlockHTML;
};
