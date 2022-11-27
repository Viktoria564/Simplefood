$(function () {
  var mixer = mixitup('.categories__list');

  $('.menu').find('.menu__link').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    }
    $('.menu').find('.menu__link').removeClass('active');
    $(this).addClass('active');
  });

  $('.user-nav__btn-search').on('click', function () {
    $('.search-form').toggleClass('search-form--active');
  });

  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
    prevArrow: '<button type="button" class="slick-prev"><svg class="reviews__icon" width="11" height="19"><use id="icon-arrow" xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="reviews__icon" width="11" height="19"><use id="icon-arrow" xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',

    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: false
        },
      }
    ]
  });

  $('.user-nav__button, .menu__box-btn, .scrollto').on('click', function () {
    $('.menu__box').toggleClass('menu__box--active');
  });

  $('.user-nav__button').on('click', function () {
    $('.header').toggleClass('active-bg');
  });

  $('.restaurants__list').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 40000,
        settings: "unslick",
      },
      {
        breakpoint: 769,
        setting: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".menu__list a, .logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu__link').on("click", function () {
    if ($('.menu__box').hasClass('menu__box--active')) {
      $('.menu__box').removeClass('menu__box--active');
    }
  });

  $('.select-style').styler();

});

