var swiper1 = new Swiper('.top-slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 400,
      effect: 'coverflow',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      coverflowEffect: {
        rotate: 20,
        slideShadows: false,
        modifier: 2,
      },
    });

var swiper2 = new Swiper('.content-slider', {
      slidesPerView: 3,
      spaceBetween: 15,
      freeMode: true,
      loop: true,
      loopedSlides: 1,
      pagination: {
        el: '.recent-posts__pagination',
        clickable: true,
      },
        navigation: {
        nextEl: '.post-next',
        prevEl: '.post-prev',
      },
      breakpoints: {
        768: {
         slidesPerView: 1,
         spaceBetween: 0,
    }
  }
}); 
