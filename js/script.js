// Initialize Swiper sliders
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
