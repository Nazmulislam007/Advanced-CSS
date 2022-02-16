const nav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
