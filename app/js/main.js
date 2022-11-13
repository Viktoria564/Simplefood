$(function() {
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
    nextArrow: '<button type="button" class="slick-next"><svg class="reviews__icon" width="11" height="19"><use id="icon-arrow" xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>'
  });
  
});

