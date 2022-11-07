const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl,.6, {
      opacity: 0,
      display: 'none'

    });
  }else{
    // 배지 보이기
    gsap.to(badgeEl,.6, {
      opacity: 1,
      display: 'block'
    });
  }
},300));

// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})
// new Swiper(선택자, 옵션)
// new Swiper('.notice-line .swiper-container',{
//   direction: 'vertical',
//   autoplay: true,
//   loop: true
// });
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})

new Swiper('.promotion .swiper-container',{
  slidesPerView: 3,// 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,// 1번 슬라이드가
  loop: true,
  autoplay:{
    delay:5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion // 반대의값 반환
  if(isHidePromotion){
    // 숨김 처리!
    promotionEl.classList.add('hide');
  }else{
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});