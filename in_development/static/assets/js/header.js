const mobileMenu = (function () {
  const mobileMenuBtn = document.querySelector("#menu-container");
  const mobileMenu = document.querySelector(".mobile-menu");
  let state = closed;

  const showMenu = function () {
    document.body.classList.toggle("stop-scrolling");
    mobileMenu.classList.toggle("show-menu");
  };

  const initialMenuPath = document.body.classList.contains("home") ? "menu.json" : "menu-black.json";

  let menuAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.querySelector("#menu-container"), // required
    path: `../static/assets/animations/${initialMenuPath}`, // required
    renderer: "svg", // required
    loop: false, // optional
    autoplay: false, // optional
    name: "menuAnimation", // optional
  });

  menuAnimation.goToAndStop(0, true);
  menuAnimation.setSpeed(3);

  function setMenuAnimation(filePath) {
    document.querySelector("#menu-container").innerHTML = "";

    menuAnimation = bodymovin.loadAnimation({
      container: document.querySelector("#menu-container"),
      path: `../static/assets/animations/${filePath}.json`,
      renderer: "svg",
      loop: false,
      autoplay: false,
      name: "menuAnimation",
    });

    menuAnimation.goToAndStop(0, true);
    menuAnimation.setSpeed(3);
  }

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

  return { setMenuAnimation };
})();