const htmlElement = document.documentElement;
const themeToggler = document.getElementById("theme-toggle");
const themeIconDark = document.getElementById("theme-icon-moon");
const themeIconLight = document.getElementById("theme-icon-sun");
const themeIconProp = document.getElementById("theme-icon-prop");
const navEle = document.querySelectorAll(".nav-ele");
const storedTheme = localStorage.getItem("color-theme");
const header = document.getElementsByTagName("h1");

navEle.forEach((element) => {
  if (!element.textContent.includes(header[0].textContent))
    element.classList.add("opacity-70");
});

themeToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  themeIconDark.classList.toggle("hidden");
  themeIconLight.classList.toggle("hidden");
  themeIconLight.classList.contains("hidden")
    ? themeIconProp.setAttribute("fill", "#000000")
    : themeIconProp.setAttribute("fill", "#FFFFFF");
});

