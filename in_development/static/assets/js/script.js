const mobileMenu = (function () {
  const mobileMenuBtn = document.querySelector("#menu-container");
  const mobileMenu = document.querySelector(".mobile-menu");
  let state = closed;

  const showMenu = function () {
    document.body.classList.toggle("stop-scrolling");
    mobileMenu.classList.toggle("show-menu");
  };

  const menuAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.querySelector("#menu-container"), // required
    path: "../static/assets/animations/menu.json", // required
    renderer: "svg", // required
    loop: false, // optional
    autoplay: false, // optional
    name: "menuAnimation", // optional
  });

  menuAnimation.goToAndStop(0, true);
  menuAnimation.setSpeed(2);

  const animateMenu = function () {
    if (state === "closed") {
      menuAnimation.playSegments([45, 72], true);
      state = "open";
      showMenu();
    } else {
      menuAnimation.playSegments([0, 30], true);
      state = "closed";
      showMenu();
    }
  };

  mobileMenuBtn.addEventListener("click", animateMenu);
})();

const header = (function () {
  const header = document.querySelector("header");
  const heroText = document.querySelector(".hero-text-wrapper");

  const checkScroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 225) {
      heroText.classList.add("hidden");
    } else {
      heroText.classList.remove("hidden");
    }
  };

  window.addEventListener("scroll", checkScroll);
})();
