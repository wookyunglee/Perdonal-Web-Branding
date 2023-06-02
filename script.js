$(function(){
  var swiper = new Swiper(".webportfolio__list>.mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    // slidesPerGroup: 4,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".portfolio__list > .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    // slidesPerGroup: 4,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  
})


