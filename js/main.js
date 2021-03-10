$(function(){
  $('.top__slider').slick({
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true
  });
});

$('.gallery__slider-view').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.gallery__slider-preview',
    responsive: [{
      breakpoint: 450,
      settings: {
        dots: true,
        fade: false
      }
    }]
});
$('.gallery__slider-preview').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.gallery__slider-view',
  dots: true,
  arrows: false,
  infinite: true,
  focusOnSelect: true,
        responsive: [{
          breakpoint: 850,
          settings: {
              slidesToShow: 4
          }
      }]
}); 

function animate(elem){
  let effect = elem.data('effect');
  if(!effect || elem.hasClass(effect)) return false;
  elem.addClass(effect);
  setTimeout( function(){
      elem.removeClass(effect);
  }, 1000);
}
$('.animated').mouseenter(function() {
  animate($(this));
}); 

$('.reviews__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrowLeft.png" alt="arrow_right"></button>',
  nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrowRight.png" alt="arrow_right"></button>',
    responsive: [{
      breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
    },
    {
      breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }]
});

$(document).ready(function(){
  $('.about__content_block').toggleClass('hide');
	  $('.about__content_toggle').click(function(){
      $('.about__content_block').toggleClass('hide');	
		if ($('.about__content_block').hasClass('hide')) {
			$('.about__content_toggle').html('Далі...');
		} else {
			$('.about__content_toggle').html('Приховати');
		}		
		return false;
	});				
});

$(document).ready(function(){
  $('.menu-toggle').on('click',function(){
        $('.menu-toggle').toggleClass('active');
      });
    });

  $('.menu-toggle').on('click', function(){
      $('.menu__list').slideToggle(700); 
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".menu-toggle").length) {
      $('.menu__list').hide();
    }
    e.stopPropagation();
  });

  $(document).ready(function(){
    $('.block').toggleClass('hidden');
      $('.toggle').click(function(){
        $('.block').toggleClass('hidden');	
      if ($('.block').hasClass('hidden')) {
        $('.toggle').html('Далі...');
      } else {
        $('.toggle').html('Приховати');
      }		
      return false;
    });				
  });
  $(document).ready(function(){
    $('.second-block').toggleClass('hidden-two');
      $('.toggle-second').click(function(){
        $('.second-block').toggleClass('hidden-two');	
      if ($('.second-block').hasClass('hidden-two')) {
        $('.toggle-second').html('Далі...');
      } else {
        $('.toggle-second').html('Приховати');
      }		
      return false;
    });				
  });
  $(document).ready(function(){
    $('.third-block').toggleClass('hidden-three');
      $('.toggle-third').click(function(){
        $('.third-block').toggleClass('hidden-three');	
      if ($('.third-block').hasClass('hidden-three')) {
        $('.toggle-third').html('Далі...');
      } else {
        $('.toggle-third').html('Приховати');
      }		
      return false;
    });				
  });
