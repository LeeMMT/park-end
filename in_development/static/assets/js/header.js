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

const accordianModule = (function () {
  const accordianitems = document.querySelectorAll(".accordian-item");
  const arrowIcon = document.querySelector(".accordian .arrow-down");

  const resetSubItems = () => {
    accordianSubItems.forEach((el) => {
      el.style.height = 0;
      el.classList.remove("open");
    });
  };

  const toggleMenu = (e) => {
    arrowIcon.classList.toggle("rotated");
    if (e.target.nextElementSibling.classList.contains("open")) {
      e.target.nextElementSibling.style.height = 0;
      e.target.nextElementSibling.classList.toggle("open");
      if (e.target.classList.contains("has-sub")) {
        resetSubItems();
      }
    } else {
      e.target.nextElementSibling.style.height = `${e.target.nextElementSibling.scrollHeight}px`;
      e.target.nextElementSibling.classList.toggle("open");
    }
  };

  accordianitems.forEach((el) => el.addEventListener("click", toggleMenu));
})();
