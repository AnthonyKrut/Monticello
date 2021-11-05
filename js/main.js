'use strict';

// init and config slider in header

$(document).ready(() => {
    $('.header__slider').slick({
        vertical: true, // changing horizontal to vertical scroll
        verticalSwiping: true, // changing horizontal to vertical scroll
        slidesToShow: 1,
        speed: 1500,
        infinite: true,
        //autoplay: true,
        pauseOnHover: true,
        dots: true,
        arrows: false
    });
});

// adding animation to social icon buttons

$('.social__item').hover(
    enter => $(enter.target).addClass('animate__bounce'),
    leave => $(leave.target).removeClass('animate__bounce')
);

// adding animation to header scroll button

$('.header__scroll').hover(
    e => $(e.target).toggleClass('animate__slideInUp')
);

// init and config slider in news section 

$(document).ready(() => {
    $('.news__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 769, // up to this bp
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 577, // up to this bp
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
})

// adding smooth scroll to all 'a' leading to anchors

$('a[href^="#"').click((e) => {
    e.preventDefault();
    let href = $(e.target).closest('a').attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000);
    return false;
});

// init button which shows additional content in modal window

$('.exmpl__btn').click(e => {
    e.preventDefault();
    $(e.target).next('.exmpl__full').removeClass('hidden');
    $('body').css('overflow', 'hidden');
});

// init button which closes modal window

$('.hidden__btn').click(e => {
    e.preventDefault();
    $(e.target).closest('.exmpl__full').addClass('hidden');
    $('body').css('overflow', '');
});

// init morphing button which shows/hides additional img's in gallery section

$('.gallery__btn').click(e => {
    e.preventDefault();
    $('.gallery__display_bottom').slideToggle();
    ($('.gallery__btn').text() === 'See more') ?
        $('.gallery__btn').text('Hide') :
        $('.gallery__btn').text('See more');
});