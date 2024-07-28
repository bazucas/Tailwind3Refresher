const menuMobile = document.getElementById("menu")
document.getElementById("current-year").textContent = new Date().getFullYear();

function openMenu() {
  menuMobile.style.top = "0px";
}

function closeMenu() {
  menuMobile.style.top = "-430px";
}