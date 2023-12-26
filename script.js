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
  


  $(".button-one").click(function(){
    $(".portfolio__but>img").toggleClass("active");
    $(".portfolio__box").addClass("active");
    $(".portfolio__box").siblings().removeClass("active");
  });

  $(".button-many").click(function(){
    $(".portfolio__but>img").toggleClass("active");
    $(".portfolio__box1").addClass("active");
    $(".portfolio__box1").siblings().removeClass("active");
  });
})


// 애니메이션

let mainImg = document.querySelector(".history__title");

window.addEventListener("scroll", function(){

  let value = this.window.scrollY;
  console.log("scrollY",value);

  if(value>600){
    $(".banner__s").css("display","block");
    $(".header__logo").css("display","block");
  
  }

  // else if(value>1500){
  //   mainImg.style.animation = "history_s 2s ease-out forwards";
  // }


});



