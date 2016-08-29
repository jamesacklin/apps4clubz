WebFont.load({
  google: {
    families: ['Roboto Slab:100,300,400', 'Roboto']
  }
});

new WOW().init();

$(document).ready(function(){
  $('.tour-button').click(function(e){
    e.preventDefault();
    var target = this.getAttribute('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});

$(window).scroll(function () {
  //stick nav to top of page
  var y = $(this).scrollTop();
  var navWrap = $('main').offset().top;
  navWrap = navWrap - 10;
  if (y > navWrap) {
    $('nav').addClass('show');
  } else {
    $('nav').removeClass('show');
  }
});
