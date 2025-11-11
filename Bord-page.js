const themeToggler = document.getElementById("theme-toggle");
const themeIconDark = document.getElementById("theme-icon-moon");
const themeIconLight = document.getElementById("theme-icon-sun");
const themeIconProp = document.getElementById("theme-icon-prop");
const storedTheme = localStorage.getItem("color-theme");
const htmlElement = document.documentElement;

themeToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  themeIconDark.classList.toggle("hidden");
  themeIconLight.classList.toggle("hidden");
  themeIconLight.classList.contains("hidden")
    ? themeIconProp.setAttribute("fill", "#FFFFFF")
    : themeIconProp.setAttribute("fill", "#000000");
});
