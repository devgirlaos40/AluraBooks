const swiper = new Swiper('.swiper', {
    spaceBetween: 50,
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    pagination: {
        el: '.swiper-paginacao',
        type: 'bullets',
    },
});