$(document).ready(function () {
    if ($(window).width() > 1050) {
        $(window).scroll(function () {
            var offset = $(window).scrollTop();
            if (offset > 70) {
                $('.nav').css({
                    'background-color': '#fff',
                    'padding': '15px 0',
                    'box-shadow': '1px 1px 2px #ddd'
                });
                $('.nav .nav-content .nav-ul ul li a').css({
                    'font-size': '12.9px'
                });
            } else {
                $('.nav').css({
                    'background-color': 'transparent',
                    'padding': '45px 0',
                    'box-shadow': '1px 1px 2px transparent'
                });
                $('.nav .nav-content .nav-ul ul li a').css({
                    'font-size': '13px'
                });
            }
        });
    }
    $('.hamburger').on('click', function () {
        $(this).find('.hamburger-content').toggleClass('hamburger-clicked');
        $('.nav-content').fadeToggle();
        $('.nav-content').css('display', 'flex');
    })
    var navHeight2 = 200;
    $(window).scroll(function () {
        var offset = $(window).scrollTop();
        var aboutTop = $(".about").position().top - navHeight2;
        var skillsTop = $(".skills").position().top - navHeight2;
        var projectTop = $(".project").position().top - navHeight2;
        var servicesTop = $(".services").position().top - navHeight2;
        var contactTop = $(".contact").position().top - navHeight2;
        if (offset > 0) {
            $('.nav .nav-content .nav-ul ul li').find('a').removeClass('active');
            $('.nav .nav-content .nav-ul ul li').eq(0).find('a').addClass('active');
        }
        if (offset > aboutTop) {
            $('.nav .nav-content .nav-ul ul li').find('a').removeClass('active');
            $('.nav .nav-content .nav-ul ul li').eq(1).find('a').addClass('active');
        }
        if (offset > projectTop) {
            $('.nav .nav-content .nav-ul ul li').find('a').removeClass('active');
            $('.nav .nav-content .nav-ul ul li').eq(3).find('a').addClass('active');
        }
        if (offset > servicesTop) {
            $('.nav .nav-content .nav-ul ul li').find('a').removeClass('active');
            $('.nav .nav-content .nav-ul ul li').eq(4).find('a').addClass('active');
        }
        if (offset > contactTop) {
            $('.nav .nav-content .nav-ul ul li').find('a').removeClass('active');
            $('.nav .nav-content .nav-ul ul li').eq(5).find('a').addClass('active');
        }
    });
    $(window).on('load', function () {
        $(".wallpaper h1").css({
            'left': '0',
            'opacity': '1'
        });
        setTimeout(function () {
            $(".wallpaper h3").css({
                'left': '0',
                'opacity': '1'
            });
        }, 300);
        setTimeout(function () {
            $(".wallpaper .button-black").css({
                'top': '0',
                'opacity': '1'
            });
            setTimeout(function () {
                $(".wallpaper .button-color").css({
                    'top': '0',
                    'opacity': '1'
                });
            }, 400);
        }, 400);
    });
    $(window).scroll(function () {
        var offset = $(window).scrollTop();
        var windowHeight = $(window).outerHeight();
        var featuresTop = $(".features").position().top;
        var infoTop = $(".info").position().top;
        if (offset > featuresTop - windowHeight + 100) {
            $(".feature-1").css({
                'top': '0',
                'opacity': '1'
            });
            setTimeout(function () {
                $(".feature-2").css({
                    'top': '0',
                    'opacity': '1'
                });
            }, 200);
            setTimeout(function () {
                $(".feature-3").css({
                    'top': '0',
                    'opacity': '1'
                });
            }, 200);
        }
        if (offset > infoTop - windowHeight + 100) {
            $(".info-section").css({
                'top': '0',
                'opacity': '1'
            });
        }
    });
    $('.info .info-content .info-images .info-image-container').click(function () {
        var infoNumber = $(this).data('info');
        $('.info .info-content .info-images .info-image-container').not(this).removeClass('active');
        $(this).addClass('active');
        $('.info-section-content').not('.info-section-content[data-info=' + infoNumber + ']').slideUp();
        $('.info-section-content[data-info=' + infoNumber + ']').slideDown();
    })

    function mobile() {
        if ($(window).width() <= 1050) {
            console.log('x');
            $('.hamburger').find('.hamburger-content').toggleClass('hamburger-clicked');
            $('.nav-content').fadeToggle();
            //            $('.nav-content').css('display', 'flex');
        }
    }
    if ($(window).width() > 1050) {
        var navHeight = 56;
    } else {
        var navHeight = 0;
    }
    $(".nav ul li a").not(".lang").click(function (e) {
        e.preventDefault();
        mobile();
    });
    $(".button-home").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(".button-about").click(function () {
        $('html,body').animate({
            scrollTop: $(".about").position().top - navHeight
        }, 500);
    });
    $(".button-skills").click(function () {
        if ($(window).width() > 1050) {
            $('html,body').animate({
                scrollTop: $(".skills").position().top - navHeight
            }, 500);
        } else {
            $('html,body').animate({
                scrollTop: $(".skills-description-2").position().top - navHeight
            }, 500);
        }
    });
    $(".button-portfolio").click(function () {
        $('html,body').animate({
            scrollTop: $(".project").position().top - navHeight
        }, 500);
    });
    $(".button-services").click(function () {
        $('html,body').animate({
            scrollTop: $(".services").position().top - navHeight
        }, 500);
    });
    $(".link-services").click(function () {
        $('html,body').animate({
            scrollTop: $(".services").position().top - navHeight
        }, 500);
    });
    $(".button-contact").click(function () {
        $('html,body').animate({
            scrollTop: $("#contact").position().top - navHeight
        }, 500);
    });
});
