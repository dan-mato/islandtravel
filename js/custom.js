$(function () {
  //햄버거 버튼
  $('header .md_menu .slide .btn').click(function () {
    $('header .md_menu .slide ul').toggle();
    $('header .md_menu .slide .btn').toggleClass('open');

  });
  //메인비주얼 스와이퍼
  let swiper = new Swiper('.main_visual', {
    //direction: 'vertical',
    loop: true,
    effect: "fade",

    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      },

    pagination: {
      el: '.main_visual .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.main_visual .swiper-button-next',
      prevEl: '.main_visual .swiper-button-prev',
    },

  });

  //지역소개 
  $('main section.regional_info .te_anau').hover(function () {
    $('.wrap').addClass('bg1');
    $('main section h2').addClass('wt');
  }, function () {
    $('.wrap').removeClass('bg1');
    $('main section h2').removeClass('wt');
  });

  $('main section.regional_info .mount_cook').hover(function () {
    $('.wrap').addClass('bg2');
    $('main section h2').addClass('wt');
  }, function () {
    $('.wrap').removeClass('bg2');
    $('main section h2').removeClass('wt');
  });
  $('main section.regional_info .ph_south').hover(function () {
    $('.wrap').addClass('bg3');
    $('main section h2').addClass('wt');
  }, function () {
    $('.wrap').removeClass('bg3');
    $('main section h2').removeClass('wt');
  });
});//ready end