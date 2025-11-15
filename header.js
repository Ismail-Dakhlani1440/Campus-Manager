const html = document.documentElement;
const header = document.querySelector("h1");
const themeToggle = document.getElementById("theme-toggle");
const iconMoon = document.getElementById("theme-icon-moon");
const iconSun = document.getElementById("theme-icon-sun");
const iconProp = document.getElementById("theme-icon-prop");
const navTabs = document.querySelectorAll(".nav-tab");
const profileButton = document.getElementById("profile-button");
const dropdownUsers = document.getElementById("dropdown-users");
const options = document.querySelectorAll(".opt");
let user;

//set tab opacity based on active header
navTabs.forEach(tab => {
  if (!tab.textContent.includes(header.textContent)) {
    tab.classList.add("opacity-70");
  }
});

//apply saved theme on load
if (localStorage.theme === "light") {
  html.classList.remove("dark");
  iconMoon.classList.remove("hidden");
  iconSun.classList.add("hidden");
  iconProp.setAttribute("fill", "#000000");
} else {
  html.classList.add("dark");
  iconMoon.classList.add("hidden");
  iconSun.classList.remove("hidden");
  iconProp.setAttribute("fill", "#FFFFFF");
}

//theme toggle handler
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");

  iconMoon.classList.toggle("hidden", isDark);
  iconSun.classList.toggle("hidden", !isDark);
  iconProp.setAttribute("fill", isDark ? "#FFFFFF" : "#000000");
  localStorage.theme = isDark ? "dark" : "light";
});
//function for showing the users list
profileButton.addEventListener("click", () => {
  dropdownUsers.classList.toggle("hidden");
});

options.forEach((element) => {
  element.addEventListener("click", () => {
    switch (element.getAttribute("nav-type")) {
      case "admin":
        console.log("admin");
        user = "admin";
        localStorage.setItem("account", JSON.stringify(user));
        location.reload();
        break;

      case "student":
        user = "student";
        localStorage.setItem("account", JSON.stringify(user));
        location.reload();
        break;

      case "client":
        user = "client";
        localStorage.setItem("account", JSON.stringify(user));
        location.reload();
        break;
    }
  });
});
