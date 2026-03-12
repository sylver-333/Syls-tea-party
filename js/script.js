/ js/script.js
const heroSwiper = new Swiper('.hero-slider', {
    loop:true,
    autoplay:{ delay:3000 },
    pagination:{ el:'.swiper-pagination', clickable:true }
});

const reviewSwiper = new Swiper('.review-slider', {
    loop:true,
    autoplay:{ delay:3500 },
    pagination:{ el:'.swiper-pagination', clickable:true }
});
