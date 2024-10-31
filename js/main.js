$(document).ready(function(){

const swiper = new Swiper('.shop_products', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2.5,
  spaceBetween:25
});


  const categorySwiper = new Swiper('.category_slider_wrap',{
    //Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.category_slider_wrap .pager',
      type: 'bullets',
      clickable: true
    },
  });

  const detailSwiper = new Swiper('.details_pic_slides',{
    //Optional parameters
    direction: 'horizontal',
    loop:true,
    slidesPerView: 1.2,
    spaceBetween:25,
    pagination: {
      el: '.detail_pic_slides_wrapper .pager',
      type: 'bullets',
      clickable: true
    },
  });

  // Aside Navigation
  var asideOpenBtn = $('.menu_icon_left'),
      aside = $('aside'),
      asideCloseBtn = aside.find('.close');

  asideOpenBtn.click(function(){
    aside.animate({left:0}, 300);
  });
  asideCloseBtn.click(function(){
    aside.animate({left:'-100%'}, 300);
  });
});//document ready

