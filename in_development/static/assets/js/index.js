const multiImageComponent = (function () {
  const multiImageSection = document.querySelector('.multi-image')
  const changeBgImage = function (e) {
    const dataI = e.target.getAttribute('data-i')
    switch (+dataI) {
      case 1:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/animals/cattle.webp)'
        break
      case 2:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/animals/chickens.webp)'
        break
      case 3:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/eggs.webp)'
        break
      case 4:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/animals/sheep.webp)'
        break
      case 5:
        multiImageSection.style.backgroundImage = 'url(../static/assets/images/animals/piggies.webp)'
        break
    }
  }
  document.querySelectorAll('.multi-image a').forEach((el) => {
    el.addEventListener('mouseover', changeBgImage)
  })
})()
