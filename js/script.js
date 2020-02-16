document.querySelector('.nav__btn').addEventListener('click', showNav);
const links = document.querySelectorAll('.nav__single-link');

for (const link of links) {
 link.addEventListener('click', showNav);
}

function showNav() {
 document.querySelector('.nav__links').classList.toggle('show__links');
}