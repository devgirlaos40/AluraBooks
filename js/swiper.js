const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    pagination: {
        el: '.swiper-paginacao',
        type: 'bullets',
    },
});