jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}

	$('.social-item').hover(function() {
		$(this).addClass('animated swing infinite');
	}, function() {
		$(this).removeClass('animated swing infinite');
	});

	AOS.init();
});


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: false
});

var jumping = document.getElementById('jumping');
var parallaxInstance = new Parallax(jumping, {
  relativeInput: false
});