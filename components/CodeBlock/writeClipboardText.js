export async function writeClipboardText(text) {
  const copyBtn = document.querySelector("[data-copy]");
  const copiedBtn = document.querySelector("[data-copied]");
  try {
    await navigator.clipboard.writeText(text);
    copiedBtn.classList.remove("hidden");

    setTimeout(() => {
      copiedBtn.classList.add("hidden");
      copyBtn.classList.remove("hidden");
    }, 1500);
  } catch (error) {
    console.error(error.message);
    copyBtn.classList.remove("hidden");
  }
}
