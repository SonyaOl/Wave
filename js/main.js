$(function () {


      $(".menu a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    

    $('.slider-blog__box').slick({
        arrows: false,
        dots: true,
         responsive: [
            {
                breakpoint: 769,
                settings: {
                     dots: false,
                }
            }
        ]
    });


       $('.menu__btn, .menu a').on('click', function() { 
        $('.menu').toggleClass('menu--active');
    });

    var mixer = mixitup('.portfolio__content');


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 0) {
            $(".header__top").addClass("active");
        } else {
            $(".header__top").removeClass("active");
        }

    });
});



