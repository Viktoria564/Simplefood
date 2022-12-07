$(function () {

  $('.select-style, .description__input').styler();


  $('.products__button, .filter__button').on('click', function () {
    $('.products__filters').toggleClass('products__filters--active');
    $(this).removeClass('products__filters--active');
  });

  $('.pagination').find('.pagination__link').on('click', function () {
    if ($(this).hasClass('pagination__link--active')) {
      return;
    }
    $('.pagination').find('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

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

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "₴",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
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

  $('.restaurants__list, .stock__list').slick({
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

  $('.description__slider-list').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="reviews__icon" width="19" height="32"><use id="icon-burger_arrow" xlink:href="images/sprite.svg#icon-burger_arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="reviews__icon" width="19" height="32"><use id="icon-burger_arrow" xlink:href="images/sprite.svg#icon-burger_arrow"></use></svg></button>',
  });

  $('.description__slider-list').magnificPopup({
    delegate: 'li a',
    type: 'image',
    fixedContentPos: true,
    closeOnBgClick: true,
    alignTop: false,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    tCounter: '%1% of %3%',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });

  $('.description-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.description-tabs__link').removeClass('description-tabs__link--active');
    $(this).addClass('description-tabs__link--active');
    $('.description-tabs__content-item').removeClass('description-tabs__content-item--active');
    $($(this).attr('href')).addClass('description-tabs__content-item--active');
  });

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    readOnly: true,
    starSvg: '<svg class="description__star-icon" width="16" height="16"><use id="icon-star" xlink: href="images/sprite.svg#icon-star"></use></svg> '
  });

  $(".star-radio").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    starSvg: '<svg class="description__star-icon" width="16" height="16"><use id="icon-star" xlink: href="images/sprite.svg#icon-star"></use></svg> '
  });


  $('.interests__list').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="reviews__icon" width="11" height="19"><use id="icon-arrow" xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="reviews__icon" width="11" height="19"><use id="icon-arrow" xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  var mixer = mixitup('.categories__list');
});

