const mobileMenu = (function () {
  const mobileMenuBtn = document.querySelector("#menu-container");
  const mobileMenu = document.querySelector(".mobile-menu");
  let state = closed;

  const showMenu = function () {
    document.body.classList.toggle("stop-scrolling");
    mobileMenu.classList.toggle("show-menu");
  };

  mobileMenuBtn.addEventListener("click", showMenu);

  const menuAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.querySelector("#menu-container"), // required
    path: "../static/assets/animations/menu.json", // required
    renderer: "svg", // required
    loop: false, // optional
    autoplay: false, // optional
    name: "menuAnimation", // optional
  });

  const animateMenu = function () {
    if (state === "closed") {
      menuAnimation.playSegments([20, 90], true);
      state = "open";
    } else {
      menuAnimation.playSegments([110, 180], true);
      state = "closed";
    }
  };

  menuAnimation.goToAndStop(20, true);
  mobileMenuBtn.addEventListener("click", animateMenu);
})();
