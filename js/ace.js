$(function () {

  //main slide
  $('.main_slider').on('init afterChange', function (e, s, c) {
    $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
  })

  $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 4000,
  });



  AOS.init();



  //frame syncing slide
  $('.main-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 4,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    asNavFor: '.nav-wrap'
  });

  $('.nav-wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-slide',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '.prev',
    nextArrow: '.next'
  });



  //totop
  $('.toTop').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 200)
  });



  //choice
  var cont = $('.ch_wrapper>div');
  cont.click(function (e) {
    e.preventDefault();
  });

  var cont = $('.ch_wrapper>div');
  cont.mouseover(function () {
    var target = $(this);

    cont.removeClass('on');
    target.addClass('on');
  });



  //move_banner
  $('.move_banner .move_botton').click(function () {
    $('.move_banner').css({
      'display': 'none'
    });
  });



  //QuickMenu
  $('.quick_menu ul li a').click(function (e) {
    e.preventDefault();
  })

  $(window).scroll(function () {
    var $quickMenu = $(this).scrollTop();
    console.log($quickMenu);

    if ($quickMenu < 1000) {
      $('.quick_menu ul').fadeOut();
    } else {
      $('.quick_menu ul').fadeIn();
    }
  });



  //DirectTop
  $(window).scroll(function () {
    var $scrollTop = $(this).scrollTop();
    console.log($scrollTop);

    if ($scrollTop < 800) {
      $('.direct_top .top').fadeOut();
    } else {
      $('.direct_top .top').fadeIn();
    }
  });

  $('.direct_top .top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500)
  });



})