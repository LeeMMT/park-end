const multiImageComponent = (function () {
  const multiImageSection = document.querySelector('.multi-image')
  const changeBgImage = function (e) {
    const dataI = e.target.getAttribute('data-i')
    switch (+dataI) {
      case 1:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/animals/cattle.jpeg)'
        break
      case 2:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/animals/piglet.jpeg)'
        break
      case 3:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/animals/cattle.jpeg)'
        break
      case 4:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/animals/piggies.jpeg)'
        break
    }
  }
  document.querySelectorAll('.multi-image a').forEach((el) => {
    el.addEventListener('mouseover', changeBgImage)
  })
})()
