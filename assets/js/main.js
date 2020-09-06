function slideSwitch() {

  // hotelスライドショー
  var $activeHotel = $('#slideshow_hotel img.active');

  if ( $activeHotel.length == 0 ) $activeHotel = $('#slideshow_hotel img:last');

  var $nextHotel =  $activeHotel.next().length ? $activeHotel.next(): $('#slideshow_hotel img:first');

  $activeHotel.addClass('last_active');

  $nextHotel.css({opacity: 0.0})
  .addClass('active')
  .animate({opacity: 1.0}, 1000, function() {
    $activeHotel.removeClass('active last_active');
  });

  // villaスライドショー
  var $activeVilla = $('#slideshow_villa img.active');

  if ( $activeVilla.length == 0 ) $activeVilla = $('#slideshow_villa img:last');

  var $nextVilla =  $activeVilla.next().length ? $activeVilla.next(): $('#slideshow_villa img:first');

  $activeVilla.addClass('last_active');

  $nextVilla.css({opacity: 0.0})
  .addClass('active')
  .animate({opacity: 1.0}, 1000, function() {
    $activeVilla.removeClass('active last_active');
  });
}

$(function() {
  setInterval( "slideSwitch()", 3500 );
});

$(function() {
  let paraPosi = 0;

	$(window).scroll(function () {
		paraPosi = $(document).scrollTop();
        $('.para1').stop(true, true).animate({
			'background-position-y': -paraPosi / 2 + 'px'
    }, 500);
  });
});

// restaurant スクロールイン
$(function() {
  $(window).scroll(function() {
    $('.fadein').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 250) {
        $(this).addClass('scrollin');
      }
    });
  });
});


// ハンバーガーメニュー
$(function() {
  $(function () {
    $('#menu_icon').on('click', function() {
      $('header').toggleClass('open');
    });
  });
});


// トップへもどるボタン
$(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });

  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); 
      return false;
  });
});
