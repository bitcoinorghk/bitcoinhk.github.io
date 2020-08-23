// NEW
$(document).ready(function(){

	// nav-bar
	$('.burger').click(function(){
		$(this).toggleClass('show');
		$('.head-centre').toggleClass('active');
  });
  
  
  // tab1 
  $('.tab1').click(function(){
		var tab_id1 = $(this).attr('data-tab');

		$('.tab1').removeClass('current');
		$('.content').removeClass('current-content');
		$(this).addClass('current');
		$("#"+tab_id1).addClass('current-content');
  });
  
  // tab committees
  $('.card-header').on('click', function() {
    if($(this).hasClass('show')) {
      return null;
    } else {
      $('.card-header').removeClass('show')
      $('.contact').hide();
      $(this).next().show(300);
      $(this).addClass('show')
    }
  });

  // slider 
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    mobileFirst: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });

  $('.slider1').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    mobileFirst: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 455,
        settings: "unslick"
      }
    ]
  });

  $('.slider2').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    mobileFirst: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick"
      }
    ]
  });
  
  // counter 
  var counterTeaserL = $('#fourth');
  var winHeight = $(window).height();
  if (counterTeaserL.length) {
    var firEvent = false,
    objectPosTop = $('#fourth').offset().top;

    //when element shows at bottom
    var elementViewInBottom = objectPosTop - winHeight;
    $(window).on('scroll', function() {
    var currentPosition = $(document).scrollTop();
    
    //when element position starting in viewport
      if (currentPosition > elementViewInBottom && firEvent === false) {
        firEvent = true;
    
        $('.count').each(function () {
          $(this).prop('Counter',0).animate({
            Counter: $(this).text()
          }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }   
    });
  }

});