const menuMobile = document.getElementById("menu")
document.getElementById("current-year").textContent = new Date().getFullYear();

function openMenu(){
  menuMobile.classList.remove("hidden")
  menuMobile.classList.add("flex") 
}

function closeMenu(){
  menuMobile.classList.remove("flex")
  menuMobile.classList.add("hidden") 
}