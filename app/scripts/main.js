WebFont.load({
  google: {
    families: ['Roboto Slab:100,300,400,700', 'Roboto']
  },
  custom: {
    families: ['FontAwesome'],
    urls: ['//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css']
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
    $('#contact-form input').prop('disabled', true).parent('.form-row').addClass('form-row-disabled');
    $('.button-submit').html('<i class="fa fa-fw fa-spin fa-spinner"></i> Please wait...');
    $.ajax({
      type: 'POST',
      url: 'https://prod.apps4clubz.com/api/leads',
      data: formData,
      dataType: 'json',
      encode: true
    }).done(function(data) {
      if (data.errors) {
        $('#contact-form input').prop('disabled', false).parent('.form-row').removeClass('form-row-disabled');
        $('.button-submit').html('<i class="fa fa-fw fa-exclamation-circle"></i> Please try submitting again.');
        // Sneakily log errors, delete this for production
        console.log(data.errors);
      } else {
        $('.button-submit').prop("disabled", true).html('<i class="fa fa-fw fa-check"></i> Thanks for getting in touch!');
      }
    });
  });
});
