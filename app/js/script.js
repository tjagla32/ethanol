$(document).ready(function(){

	$('#header-icon').click(function(e){
		e.preventDefault();
		$('nav').toggleClass('sidebar');
	});
	$('section, .menu a').click(function(){
		$('nav').removeClass('sidebar');
	});

	// $('a[href^="#"]').click(function(e){
  //
  //   var target = $(this).attr('href');
  //   var strip = target.slice(1);
  //                                 //var hjh = $(this.hash);
  //   var anchor = $("section[id='" + strip + "']");
  //
  //   e.preventDefault(); //zapobiega przeładowaniu
  //
  //   $('html, body').animate({
  //
  //     scrollTop: anchor.offset().top - $('header').height()*1.3
  //
  //   }, 'slow');
  //
  // });

	$('.slider').slick({
		infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
		speed: 500,
		dots: true,
		autoplay: true,
  	autoplaySpeed: 6000
  });

	/* initialize shuffle plugin */
  var $grid = $('#grid');
  $grid.shuffle({
    itemSelector: '.item' // the selector for the items in the grid
  });
  /* reshuffle when user clicks a filter item */
  $('#filter a').click(function (e) {
    e.preventDefault();
    // set active class
    $('#filter a').removeClass('active');
    $(this).addClass('active');
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
    // reshuffle grid
    $grid.shuffle('shuffle', groupName );
  });
	
});
