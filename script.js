const filters = document.querySelectorAll('[data-target]')
const filtersContents = document.querySelectorAll('[data-content]')
const overlayBg = document.getElementById('overlay-bg')
const imageBorder = document.getElementById('image-border')
const profileImage = document.getElementById('profile-image')
const rightsElement = document.querySelector('.rights');

const sr = ScrollReveal({
    origin: 'top',
    distance: '15px',
    duration: 2000,
    delay: 200,
})
sr.reveal('.data')
sr.reveal('.name', { delay: 400 })
sr.reveal('.job', { delay: 500 })
sr.reveal('.social-media', { delay: 600 })
sr.reveal('.cv', { delay: 700 })
sr.reveal('.about', { delay: 800 })
sr.reveal('.content', { delay: 900 })
sr.reveal('.filters-sections', { delay: 1000 })

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

imageBorder.addEventListener('click', () => {
    if (overlayBg.classList.contains('active')) {
        overlayBg.classList.remove('active');
        imageBorder.classList.remove('expanded');
    } else {
        overlayBg.classList.add('active');
        imageBorder.classList.add('expanded');
    }
});
overlayBg.addEventListener('click', () => {
    overlayBg.classList.remove('active');
    imageBorder.classList.remove('expanded');
});
window.addEventListener('scroll', () => {
    overlayBg.classList.remove('active');
    imageBorder.classList.remove('expanded');
});
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    if (rightsElement) {
        rightsElement.textContent = `© ${currentYear} Bartosz Gicala`;
    }
});