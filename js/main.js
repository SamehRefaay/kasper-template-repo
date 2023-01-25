/*start variables */
const menuIcon = document.querySelector(".toggle-menu");
const menu = document.querySelector("nav ul");

menuIcon.addEventListener("click", showMenu);

function showMenu() {
  console.log("menu has been clicked!");
  menu.classList.toggle("show-vertically");
}

/*end variables */
