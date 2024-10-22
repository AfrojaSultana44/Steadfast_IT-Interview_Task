const openIcon = document.getElementById("mobile-menu-open");

const closeIcon = document.getElementById("mobile-menu-close");

const mobileMenu = document.getElementById("mobile-menu");

openIcon.addEventListener("click", () => {
  mobileMenu.style.display = "inline-block";
});

closeIcon.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    mobileMenu.style.display = "none";
  }
});
