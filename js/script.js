// Hamburger Menu Toggle (for mobile)
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Initialize Swiper
const heroSwiper = new Swiper('.hero-slider', {
    loop:true,
    autoplay:{ delay:2500 },
    pagination:{ el:'.swiper-pagination', clickable:true }
});

const reviewSwiper = new Swiper('.review-slider', {
    loop:true,
    autoplay:{ delay:3000 },
    pagination:{ el:'.swiper-pagination', clickable:true }
});
