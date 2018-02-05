/*global $*/
/*global console */
$(document).ready(function () {
    "use strict";
    
    //Nice Scroll******
    
    $("body").niceScroll({
        cursorcolor: "rgba(82, 78, 78, .3)",
        cursorwidth: "10"
    });
    
    var myText = "Web Designer And Front End Developer-",
        i = 0;
    
    window.onload = function () {
        var typeWriter = setInterval(function () {
            document.getElementById('h').textContent += myText[i];
            i = i + 1;
            if (i > myText.length - 1) {
                clearInterval(typeWriter);
            }
        }, 100);
    };
    
    //Show Navbar Icon Name******
    
    $(".header .overlay ul i").mouseover(function () {
        $('#' + $(this).data('value')).fadeIn(400);
    });
    $(".header .overlay ul i").mouseleave(function () {
        $('#' + $(this).data('value')).fadeOut(400);
    });
    
    
    //Show Navbar Icon In XS Screen

    $(".header .overlay ul .phone").on('click', function () {
        $(this).siblings().toggleClass('hidden-xs');
           
    });
    
    
    //Scroll To Section******
    
    $(".header .overlay ul i").click(function () {
        console.log($(this).data('value'));
        $('html, body').animate({
            scrollTop : $('.' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    
    //Change Nav Background Color******
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 350) {
            $('.header .overlay ul i').css('backgroundColor', 'rgba(0, 0, 0, .8)');
        } else {
            $('.header .overlay ul i').css('backgroundColor', 'rgba(49, 49, 52, .3)');
        }
    });
    
    
    // Shuffle MixItUp******
    
    $('#container').mixItUp();
    
    //Start Testimonial******
    
    // invoke the carousel
    $('#myCarousel').carousel({
        interval: 6000
    });

// scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
			
			
        } else {
            $(this).carousel('next');
			
        }
    });

//scroll slides on swipe for touch enabled devices 

    $("#myCarousel").on("touchstart", function (event) {

        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one("touchmove", function (event) {

            var yMove = event.originalEvent.touches[0].pageY;
            if (Math.floor(yClick - yMove) > 1) {
                $(".carousel").carousel('next');
            } else if (Math.floor(yClick - yMove) < -1) {
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });

});
//animated  carousel start

//to add  start animation on load for first slide 
$(function () {
    'use strict';
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass(animationName);
            });
        }
    });
    $('.item1.active img').animateCss('slideInDown');
    $('.item1.active h2').animateCss('zoomIn');
    $('.item1.active p').animateCss('fadeIn');

});

//to start animation on  mousescroll , click and swipe



$("#myCarousel").on('slide.bs.carousel', function () {
    'use strict';
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass(animationName);
            });
        }
    });

// add animation type  from animate.css on the element which you want to animate

    $('.item1 img').animateCss('slideInDown');
    $('.item1 h2').animateCss('zoomIn');
    $('.item1 p').animateCss('fadeIn');

    $('.item2 img').animateCss('zoomIn');
    $('.item2 h2').animateCss('swing');
    $('.item2 p').animateCss('fadeIn');

    $('.item3 img').animateCss('fadeInLeft');
    $('.item3 h2').animateCss('fadeInDown');
    $('.item3 p').animateCss('fadeIn');
    
    
    
    //Button Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $("#scroll-top").show();
        } else {
            $("#scroll-top").hide();
        }
    });
    $("#scroll-top").click(function () {
        $('html,body').animate({scrollTop : 0}, 1000);
    });
    
});

//Loading     
$(window).on('load', function () {
    "use strict";
    $('.loading-overlay .sk-folding-cube').fadeOut(1000, function () {
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });
});