$(function(){

	$nav = $('nav');
	$nav.css('width', $nav.outerWidth());
	$window = $(window);
	$h = $nav.offset().top;
	$window.scroll(function(){
		if ($window.scrollTop() > $h) {
			$nav.addClass('fixed');
		} else {
			$nav.removeClass('fixed');
		}
	});

    // navbar transparent

    $(window).scroll(function() {
           
       if($(this).scrollTop() < 800) { 
           $('.navbar1').removeClass('solid');
       } else {
           $('.navbar1').addClass('solid');
       }
    });

    // navbar search button

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    $('.nav > img').on('click', function(){
        $('#search').css({
            'display': 'block',
        });
    })


	function changeDot() {
    const scrollValue = $(window).scrollTop();
    const heightSec2 = $('.sec2').offset().top;
    const heightSec3 = $('.sec3').offset().top;
    const heightSec4 = $('.sec4').offset().top;
    const heightSec5 = $('.sec5').offset().top;
    const heightSec6 = $('.sec6').offset().top;

    if (scrollValue < heightSec2) {
        $('main .nav li').not('.dot1').removeClass('active');
        $('.dot1').addClass('active');
    } else if (scrollValue < heightSec3) {
        $('main .nav li').not('.dot2').removeClass('active');
        $('.dot2').addClass('active');
    } else if (scrollValue < heightSec4) {
        $('main .nav li').not('.dot3').removeClass('active');
        $('.dot3').addClass('active');
    } else if (scrollValue < heightSec5) {
        $('main .nav li').not('.dot4').removeClass('active');
        $('.dot4').addClass('active');
    }  else if (scrollValue < heightSec6) {
        $('main .nav li').not('.dot5').removeClass('active');
        $('.dot5').addClass('active');
    }  else {
        $('main .nav li').not('.dot6').removeClass('active');
        $('.dot6').addClass('active');
    }
}

	$(window).on("scroll", changeDot)

	$('main .nav li').on('click', function () {
	    const goToSection = '.s' + $(this).attr('id');
	    $('body, html').animate({
	        scrollTop: $(goToSection).offset().top + 1
	    })
	});


    $('.slide:gt(0)').hide();
    setInterval(function() {
        $('.slide:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('.slider');
    }, 3000)






});
