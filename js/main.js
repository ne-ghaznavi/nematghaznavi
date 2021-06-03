// select element
const nav = document.querySelector('.navigation');

// add event


window.onscroll = function() {
    let top = window.scrollY;
    if (top > 100) {
        nav.classList.add('navScrolled');
    } else {
        nav.classList.remove('navScrolled');
    }
};






