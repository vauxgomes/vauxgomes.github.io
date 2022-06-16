document.querySelectorAll('.experience').forEach((item) => {
  item.addEventListener('click', () => {
    target = item.getAttribute('data-target')

    document.querySelector('.exp-description.active').classList.remove('active')
    document.querySelector('.experience.active').classList.remove('active')

    item.classList.add('active')
    document.querySelector(target).classList.add('active')
  })
})

// Nav scroll
window.onscroll = function () {
  var e = document.getElementById('topbar')

  if (window.pageYOffset > 10) {
    e.classList.add('shadow')
  } else {
    e.classList.remove('shadow')
  }
}
