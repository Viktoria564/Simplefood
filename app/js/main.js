$(function() {

  $('.menu').find('.menu__link').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    }
    $('.menu').find('.menu__link').removeClass('active');
    $(this).addClass('active');
  });

  $('.user-nav__link-search').on('click', function () {
    $('.search-form').toggleClass('search-form--active');
  });
  
});