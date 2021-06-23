// select element
const nav = document.querySelector('.navigation');
const menu_toggler = document.querySelector('.menu_toggler');
const menu_list = document.querySelector('.menu-list');

// add event
menu_toggler.addEventListener('click', () => {
    menu_list.classList.toggle('menu_list_toggle');
});

window.onscroll = function() {
    let top = window.scrollY;
    if (top > 100) {
        nav.classList.add('navScrolled');
    } else {
        nav.classList.remove('navScrolled');
    }
};

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});





