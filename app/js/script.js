$(document).ready(function(){

	var lastScrollTop = 0;
	var ratio = 0;

	if($(window).width() > 750){
		ratio = 0.65;
	}else{
		ratio = 1.15;
	}

	$('.skill').css('width', '0');

	function loadProgressBar(){
		$('.skill').each(function(i){
			setTimeout(function(){
				var level = $('.skill').eq(i).data("size");
				$('.skill').eq(i).animate({width: level}, {duration: 1000, easing: 'swing'});
			},i*250);
		});
	}

	$('#header-icon').click(function(e){
		e.preventDefault();
		$('nav').toggleClass('sidebar');
	});
	$('section, .menu a').click(function(){
		$('nav').removeClass('sidebar');
	});

	$('a[href^="#"]').click(function(e){

    var target = $(this).attr('href');
    var strip = target.slice(1);

    var anchor = $("section[id='" + strip + "']");

    e.preventDefault(); //zapobiega przeładowaniu

    $('html, body').animate({

      scrollTop: anchor.offset().top - 50

    }, 1500);

  });

	//slick slider
	$('.slider').slick({
		infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
		speed: 500,
		dots: true,
		autoplay: true,
  	autoplaySpeed: 4000,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
				dots: false
      }
    }
  ]
  });


	// init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    //layoutMode: 'fitRows',
		masonry: {
      columnWidth: 256,
      isFitWidth: true
    }
  });
  // bind filter button click
  $('.filters-button-group .button').on( 'click', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

		$(window).scroll(function(event){
			if($(window).scrollTop() > $('.progress-bars').offset().top-$(window).height()*ratio){
				loadProgressBar();
			}
			//footer
			var footerHeight = $('footer').outerHeight();
			//console.log(footerHeight);
			$('.content').css('margin-bottom', footerHeight);

		});
});
