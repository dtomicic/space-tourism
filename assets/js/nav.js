const ACTIONBTN = document.getElementsByClassName('actionBtn');
const MENU = document.getElementById('navigationMenu');

document.querySelectorAll('.actionBtn')
.forEach (item => {
    item.addEventListener('click', () => {
        MENU.classList.toggle('openMobileNav');
        document.body.classList.toggle('disableOverflow');
    })
})