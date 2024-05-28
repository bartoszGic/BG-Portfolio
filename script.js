const filters = document.querySelectorAll('[data-target]')
const filtersContents = document.querySelectorAll('[data-content]')

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 3000,
    delay: 200,
})
sr.reveal('.border')
sr.reveal('.name', { delay: 350 })
sr.reveal('.job', { delay: 400 })
sr.reveal('.social-media', { delay: 450 })
sr.reveal('.about', { delay: 500 })
sr.reveal('.cv', { delay: 550 })
sr.reveal('.content', { delay: 600 })
sr.reveal('.filters-sections', { delay: 650 })

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        const target = document.querySelector(filter.dataset.target)
        filtersContents.forEach(filterContent => {
            filterContent.classList.remove('filters-active')
        })
        target.classList.add('filters-active')
        filters.forEach(filter => { filter.classList.remove('filter-btn-active') })
        filter.classList.add('filter-btn-active')
        sr.reveal('.group', { delay: 300 })

    })
})

const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



