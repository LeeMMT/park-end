const mobileMenu = (function () {
  const mobileMenuBtn = document.querySelector('#menu-container')
  const mobileMenu = document.querySelector('.mobile-menu')
  let state = closed

  const showMenu = function () {
    document.body.classList.toggle('stop-scrolling')
    mobileMenu.classList.toggle('show-menu')
  }

  const menuAnimation = bodymovin.loadAnimation({
    container: document.querySelector('#menu-container'),
    path: '../static/assets/animations/menu-black.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: 'menuAnimation',
  })

  const animateMenu = function () {
    if (state === 'closed') {
      menuAnimation.playSegments([45, 70], true)
      state = 'open'
      showMenu()
    } else {
      menuAnimation.playSegments([4, 30], true)
      state = 'closed'
      showMenu()
    }
  }

  menuAnimation.goToAndStop(0, true)
  menuAnimation.setSpeed(3)

  mobileMenuBtn.addEventListener('click', animateMenu)
})()

const accordianModule = (function () {
  const accordianitems = document.querySelectorAll('.accordian-item')
  const arrowIcon = document.querySelector('.accordian .arrow-down')

  const resetSubItems = () => {
    accordianSubItems.forEach((el) => {
      el.style.height = 0
      el.classList.remove('open')
    })
  }

  const toggleMenu = (e) => {
    arrowIcon.classList.toggle('rotated')
    if (e.target.nextElementSibling.classList.contains('open')) {
      e.target.nextElementSibling.style.height = 0
      e.target.nextElementSibling.classList.toggle('open')
      if (e.target.classList.contains('has-sub')) {
        resetSubItems()
      }
    } else {
      e.target.nextElementSibling.style.height = `${e.target.nextElementSibling.scrollHeight}px`
      e.target.nextElementSibling.classList.toggle('open')
    }
  }

  accordianitems.forEach((el) => el.addEventListener('click', toggleMenu))
})()
