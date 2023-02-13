(function($) {
    "use strict";

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function() {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    })

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    /*--/ Star ScrollTop /--*/
    $('.scrolltop-mf').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    /*--/ Star Counter /--*/
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    /*--/ Star Scrolling nav /--*/
    var mainNav_height = $('#mainNav').outerHeight() - 22;
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var scrollto = target.offset().top - mainNav_height;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to sections on load with hash links
    if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
            var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
            $('html, body').animate({
                scrollTop: scrollto_initial
            }, 1000, "easeInOutExpo");
        }
    }

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll').on("click", function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });
    /*--/ End Scrolling nav /--*/

    /*--/ Navbar Menu Reduce /--*/
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-md').addClass('navbar-reduce');
            $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
            if (!$('#navbarDefault').hasClass('show')) {
                $('.navbar-expand-md').removeClass('navbar-reduce');
            }
            $('.navbar-expand-md').addClass('navbar-trans');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

    /*--/ Star Typed /--*/
    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }

    /*--/ Testimonials owl /--*/
    $('#testimonial-mf').owlCarousel({
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
        $('.venobox').venobox({
            'share': false
        });
    });

})(jQuery);


const compareDate = new Date(2022, 12, 1, 0, 0, 0, 0);
// Time of countdown. Year, month, date, hours, minutes, seconds, ms

const timer = setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function ruAdaptation(seconds, minutes, hours, days) {
    const secondsLastSymbol = seconds % 10;
    const minutesLastSymbol = minutes % 10;
    const hoursLastSymbol = hours % 10;
    const daysLastSymbol = days % 10;

    if (seconds > 4 && seconds < 20) {} else if (secondsLastSymbol === 1) {
        $(".title-seconds").text("seconds");
    } else if (secondsLastSymbol > 1 && secondsLastSymbol <= 4) {
        $(".title-seconds").text("seconds");
    } else {
        $(".title-seconds").text("seconds");
    }

    if (minutes > 4 && minutes < 20) {} else if (minutesLastSymbol === 1) {
        $(".title-minutes").text("minutes");
    } else if (minutesLastSymbol > 1 && minutesLastSymbol <= 4) {
        $(".title-minutes").text("minutes");
    } else {
        $(".title-minutes").text("minutes");
    }

    if (hours > 4 && hours < 20) {} else if (hoursLastSymbol === 1) {
        $(".title-hours").text("hours");
    } else if (hoursLastSymbol > 1 && hoursLastSymbol <= 4) {
        $(".title-hours").text("hours");
    } else {
        $(".title-hours").text("hours");
    }

    if (days > 4 && days < 20) {} else if (daysLastSymbol === 1) {
        $(".title-days").text("days");
    } else if (daysLastSymbol > 1 && daysLastSymbol <= 4) {
        $(".title-days").text("Days");
    } else {
        $(".title-days").text("Days");
    }
}

function timeBetweenDates(toDate) {
    const dateEntered = toDate;
    const now = new Date();
    const difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
        clearInterval(timer);
    } else {
        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        ruAdaptation(seconds, minutes, hours, days);
    }
}