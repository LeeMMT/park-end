const transparentHeader = (function () {
  const header = document.querySelector("header");
  let menuIsWhite = true;

  const checkScroll = function () {
    if (!header.classList.contains("home")) return;
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 64) {
      header.classList.add("solid-bg");
      if (menuIsWhite) {
        mobileMenu.setMenuAnimation("menu-black");
        menuIsWhite = false;
      }
    } else {
      header.classList.remove("solid-bg");
      if (!menuIsWhite) {
        mobileMenu.setMenuAnimation("menu");
        menuIsWhite = true;
      }
    }
  };

  window.addEventListener("scroll", checkScroll);
})();
