const textSizeInput = document.getElementById("text-size");
const highContrastCheckbox = document.getElementById("high-contrast");
const dyslexiaFontCheckbox = document.getElementById("dyslexia-font");

textSizeInput.addEventListener("input", () => {
  document.body.style.fontSize = textSizeInput.value + "px";
});

highContrastCheckbox.addEventListener("change", () => {
  if (highContrastCheckbox.checked) {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
});

dyslexiaFontCheckbox.addEventListener("change", () => {
  document.body.style.fontFamily = dyslexiaFontCheckbox.checked ? "Comic Sans MS, sans-serif" : "Arial, sans-serif";
});
