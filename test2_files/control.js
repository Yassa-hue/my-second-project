/* global $, alert, console */
$(function () {
    'use strict';
    $("body").niceScroll();
    // change header height
    var wndht =  $(window).height()
    $('.header').height(wndht);

    // change intro height
    $('.header .intro').css('margin-top', wndht/4);

    // arrow function
    $('.header .intro .arrow i').click(function () {
        $('html, budy').animate({
            scrollTop: $('.features').offset().top
        },500)
    });

    // show more
    $('.show-more').click(function () {
        if ($('.over').css('dispiay') == 'none') {
            $('.over').fadeIn(500);
        }else{
            $('.over').fadeOut(500);
        }
    })

    // slides

    function check() {
        if ($('.active').hasClass('lastSlide')) {
            $('.fa-chevron-right').fadeOut(200);
        } else {
            $('.fa-chevron-right').fadeIn(200);
        };

        
        if ($('.active').hasClass('firstSlide')) {
            $('.fa fa-chevron-left').fadeOut(200);
        } else {
            $('.fa fa-chevron-left').fadeIn(200);
        };
    };

    
  
    $('.next').click(function () {
        check();
        $('.active').removeClass('active').next('div').addClass('active').removeClass('hidden');
        $('.active').prev('div').addClass('hidden');
    });
    $('.back').click(function () {
        check();
        $('.active').removeClass('active').prev('div').addClass('active').removeClass('hidden');
        $('.active').next('div').addClass('hidden');
    });
    
});

    
