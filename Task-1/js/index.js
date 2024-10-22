const openIcon = document.getElementById("mobile-menu-open");

const closeIcon = document.getElementById("mobile-menu-close");

const desktopMenu = document.getElementById("desktop-menu");

const mobileMenu = document.getElementById("mobile-menu");

openIcon.addEventListener("click", () => {

  console.log("mobileMenu:", mobileMenu);


  openIcon.classList.remove("display-block");
  openIcon.classList.add("display-hidden");

  closeIcon.classList.add("display-block");

  mobileMenu.classList.remove("display-hidden");

  mobileMenu.classList.add("display-block");

  desktopMenu.classList.remove("display-block");
  desktopMenu.classList.add("display-hidden");
});

closeIcon.addEventListener("click", () => {
  console.log("mobileMenu:", mobileMenu);

  closeIcon.classList.remove("display-block");
  closeIcon.classList.add("display-hidden");

  openIcon.classList.add("display-block");

  desktopMenu.classList.remove("display-hidden");

  desktopMenu.classList.add("display-block");

  mobileMenu.classList.remove("display-block");
  mobileMenu.classList.add("display-hidden");
});
