WebFont.load({
  google: {
    families: ['Roboto Slab:100,300,400,700', 'Roboto']
  }
});

var wow = new WOW({
  mobile: false
});

wow.init();

$(document).ready(function() {
  $('.tour-button').click(function(e) {
    e.preventDefault();
    var target = this.getAttribute('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});

$(window).scroll(function() {
  //stick nav to top of page
  var y = $(this).scrollTop();
  var navWrap = $('header').offset().top;
  if (y > navWrap) {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
});

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('#contact-form').on('submit', function(e) {
      e.preventDefault();
      var formData = $(this).serializeObject();
      console.log(formData);
    });
});
