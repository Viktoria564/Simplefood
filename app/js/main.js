$(function() {

  $('.menu').find('.menu__link').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    }
    $('.menu').find('.menu__link').removeClass('active');
    $(this).addClass('active');
  });
  
});