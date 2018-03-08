$(document).ready(function () {
    
    var home = $('div').hasClass('wallpaper-home');
    
    
//    project += "<div class='portfolio-project col-sm-6'><img src='" +
//            x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue +
//            "' alt=''></div>";
    
    
    
    
    
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
    if(home){
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
        
    }
    $(window).on('load', function () {
        $(".wallpaper h1").css({
            'left': '0',
            'opacity': '1'
        });
    if(home){
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
        
    }
    });
    if(home){
        var amountScrolled;
        function count(i) {
            var amount = $('.fact-'+i).find('h2').data('number');
            $('.timer-'+i).countTo({
                from: 0,
                to: amount,
                speed: 2000,
                refreshInterval: 50,
                formatter: function (value, options) {
                  return value.toFixed(options.decimals);
                },
                onUpdate: function (value) {
                  console.debug(this);
                },
                onComplete: function (value) {
                  console.debug(this);
                }
              });
        }
        var windowHeight = $(window).outerHeight();
        var int1 = setInterval(function(){
            if(amountScrolled > $('.fact-1').position().top - windowHeight + 150){
                console.log('x');
                clearInterval(int1);
                count(1);
            }
        },100);
        var int2 = setInterval(function(){
            if(amountScrolled > $('.fact-2').position().top - windowHeight + 150){
                console.log('x2');
                clearInterval(int2);
                count(2);
            }
        },100);
        var int3 = setInterval(function(){
            if(amountScrolled > $('.fact-3').position().top - windowHeight + 150){
                console.log('x3');
                clearInterval(int3);
                count(3);
            }
        },100);
        var int4 = setInterval(function(){
            if(amountScrolled > $('.fact-4').position().top - windowHeight + 150){
                console.log('x4');
                clearInterval(int4);
                count(4);
            }
        },100);
        
        
    $(window).scroll(function () {
        amountScrolled = $(window).scrollTop();
//        console.log(amountScrolled);
        var offset = $(window).scrollTop();
        var windowHeight = $(window).outerHeight();
        var featuresTop = $(".features").position().top;
        var infoTop = $(".info").position().top;
        var project1Top = $(".project-container-1").position().top;
        var project2Top = $(".project-container-2").position().top;
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
        if (offset > infoTop - windowHeight + 150) {
            $(".info-section").css({
                'top': '0',
                'opacity': '1'
            });
        }
        if($(window).width() > 768){
            if (offset > project1Top - windowHeight + 200) {
                $(".project-container-1 .project-image img").css({
                    'padding': '20px 35px 20px 0',
                    'opacity': '1'
                });
            }
            if (offset > project2Top - windowHeight + 200) {
                $(".project-container-2 .project-image img").css({
                    'padding': '20px 0 20px 35px',
                    'opacity': '1'
                });
            }
        } else{
            if (offset > project1Top - windowHeight + 200) {
                $(".project-container-1 .project-image img").css({
                    'padding': '20px 0px 20px 0',
                    'opacity': '1'
                });
            }
            if (offset > project2Top - windowHeight + 200) {
                $(".project-container-2 .project-image img").css({
                    'padding': '20px 0 20px 0px',
                    'opacity': '1'
                });
            }
        }
        $('.fact').each(function(index, value){
            var that = this;
            var t = setTimeout(function(){
                if (offset > $(that).position().top - windowHeight + 150){
                    $(that).css({
                        'top': '0',
                        'opacity': '1'
                    });
                }
            },index * 400);
        });
        $('.services .services-content .services-info .service').each(function(index, value){
            var that2 = this;
            var t2 = setTimeout(function(){
                if (offset > $('.services .services-content .services-info').position().top - windowHeight + 150){
                    $(that2).css({
                        'left': '0',
                        'opacity': '1'
                    });
                }
            },index * 400);
        });
        
    });
    }
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
    if(home){
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
        
    }
});
