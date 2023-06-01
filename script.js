// $(document).ready(function(){}) == $(function(){})
// // 	충돌을 막기 위해서 html이 끝나고 js 시작
// // document:html이 무거울 경우 사용
// // 함수가 제대로 작동하는 지 확인하는 방법 2가지
// 1. alert("text")
// $(document).redy(function(){
// 	$("class name").click(function(){
// 		 alert("알림");
// 	})
// });


// console.clear();
// // 콘솔 창 깨끗하게 지우기 : 문서 시작 할때 가장 위에 씀

// 2.console.log("text")
// $(document).ready(function(){
// 	$("class name").click(function(){
//     console.log("콘솔")
// 	})
// });


// //     let = var : 정의를 내린다.
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


