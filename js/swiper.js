const swiper = new Swiper('.swiper', {
  loop: true,
  // freeMode: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },

  //   mousewheel: {
  //     sensitivity: 1,
  //     eventsTarget: '.swiper',
  //   },
});
