const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-paginacao',
        type: 'bullets',
    },
});