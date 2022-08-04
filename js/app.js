/* Topbar navigation */

document.querySelector('#topbar-toggler').addEventListener('click', () => {
  document.querySelector('#topbar nav').classList.toggle('show')
})

document.querySelectorAll('#topbar nav a').forEach((a) =>
  a.addEventListener('click', () => {
    document.querySelector('#topbar nav').classList.remove('show')
  })
)

// Scroll
window.onscroll = function () {
  var e = document.getElementById('topbar')

  if (window.pageYOffset > 10) {
    e.classList.add('shadow')
  } else {
    e.classList.remove('shadow')
  }
}

/* Experiences */
document.querySelectorAll('.experience').forEach((item) => {
  item.addEventListener('click', () => {
    target = item.getAttribute('data-target')

    document.querySelector('.exp-description.active').classList.remove('active')
    document.querySelector('.experience.active').classList.remove('active')

    item.classList.add('active')
    document.querySelector(target).classList.add('active')
  })
})

/* Calendar */
const showActivities = (dayIndex) => {
  days[dayIndex].classList.add('active')

  activities.innerHTML = ''
  schedule[dayIndex].activities.forEach((act) => {
    const tr = document.createElement('tr')

    let td = document.createElement('td')
    td.innerHTML = `${act.start} - ${act.end}`
    tr.append(td)

    td = document.createElement('td')
    td.innerHTML = act.activity
    tr.append(td)

    activities.append(tr)
  })
}

const activities = document.querySelector('#activities tbody')
const days = document.querySelectorAll('.day-name')
const today = new Date()

if (today.getDay() <= 4 && today.getDay() > 1) {
  showActivities(today.getDay() - 2)
}

days.forEach((day, index) => {
  day.addEventListener('click', (e) => {
    document.querySelector('.day-name.active').classList.remove('active')
    showActivities(index)
  })
})
