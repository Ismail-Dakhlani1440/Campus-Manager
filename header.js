const htmlElement = document.documentElement;
const themeToggler = document.getElementById("theme-toggle");
const themeIconDark = document.getElementById("theme-icon-moon");
const themeIconLight = document.getElementById("theme-icon-sun");
const themeIconProp = document.getElementById("theme-icon-prop");
const navTabs = document.querySelectorAll(".nav-tab");

//navigation tabs opacity based on the active one
//we know the active tab by checking the header content
navTabs.forEach((element) => {
  if (!element.textContent.includes(header[0].textContent))
    element.classList.add("opacity-70");
});

//the dark/light mode toggler
//i also added icons and made them change based on the current mode
themeToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  themeIconDark.classList.toggle("hidden");
  themeIconLight.classList.toggle("hidden");
  themeIconLight.classList.contains("hidden")
    ? themeIconProp.setAttribute("fill", "#000000")
    : themeIconProp.setAttribute("fill", "#FFFFFF");
});
