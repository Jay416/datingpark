$(document).ready(function(){
	var TIME = 500;
	var one = $('.container-one');
	var two = $('.container-two');
	var $home = $('.home');
	var $page_block = $('.page_block');
	var $page_cont = $('.page_cont');
	var $scrollfix = $('.scrollfix');

	function scrollfix () {
		if (document.documentElement.clientWidth && document.scrollHeight != document.offsetHeight) {
			$scrollfix.width(document.documentElement.clientWidth - 14);
		};
	};

	function hash () {
		var hash = window.location.hash.slice(1);
		$page_cont.removeClass('active');
		var $page_wrap = (hash) ? $page_block.find('._'+hash) : [];

		if(!$page_wrap.length){
			$home.removeClass('nope');
			return false;
		}
		

		$home.addClass('nope');
		$page_wrap.addClass('active');

		var $pages = $page_wrap.children('.page_wrap').find('.page');

		$pages.removeClass('active');
		$pages.first().addClass('active');
		
		var $arrows = $page_wrap.find('.page_arrow');
		$arrows.off('click');
		$arrows.click(function () {
			var $elem;
			var $active = $pages.filter('.active');
			
			switch ($(this).attr('rol')){
				case 'left':
					$elem = $active.prev();
				break;
				case 'right':
					$elem = $active.next();
				break;
			}
			if(!$elem.length) return false;
			$pages.removeClass('active');
			$elem.addClass('active');
		})

		scrollfix();
	};

	$(window).on('hashchange', hash);
	hash();
	$( window ).resize(scrollfix);
	scrollfix();


	$('.call-btn').click(function(){
		one.removeClass('hide');
		one.animate({opacity:1}, TIME);
		
	});

	$('.close').click(function(){
		one.animate({opacity:0}, TIME, function () {
			one.addClass('hide');
		});
	});

	$('.btn-what').click(function(){
		two.removeClass('hide');
		two.animate({opacity:1}, TIME);
		
	});

	$('.close').click(function(){
		two.animate({opacity:0}, TIME, function () {
			two.addClass('hide');
		});
	});

});