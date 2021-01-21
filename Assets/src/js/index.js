$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

var scroll = new SmoothScroll('a[href*="#"]');

