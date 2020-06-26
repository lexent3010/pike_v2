import jQuery from "jquery";

window.$ = window.jQuery = jQuery;
import Inputmask from "inputmask";
import slick from "slick-carousel"


$(() => {

    const SetStaticTextPosition = () => { // Функция подсчета отступов
        $('.static-text').removeAttr('style');
        if ($(window).width() < 1440 && $(window).width() > 1023) {
            $('.static-text').css({"margin-left": -($('.static-text').offset().left)})
        }
        if ($(window).width() < 1024) {
            $('.static-text').css({"margin-left": $(window).width() - ($('.static-text').offset().left + $('.static-text').outerWidth())})
        }
    }

    SetStaticTextPosition()

    $('.clients-slider').slick({ // Слайдер клиентов
        variableWidth: true,
        arrows: true,
        slidesToShow: 2,
        infinite: false,
        nextArrow: '#next-client',
        prevArrow: '#previous-client',
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $('.integration-experience-slider').slick({ // Слайдер слайда интеграций
        variableWidth: true,
        arrows: true,
        slidesToShow: 2,
        infinite: false,
        nextArrow: '#next-int',
        prevArrow: '#previous-int',
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    Inputmask({mask: "+7 (999) 999-99-99", jitMasking: true, showMaskOnHover: null}).mask('#phone')   // Макса для номера телефона и проверка

    window.addEventListener('resize',() => {
        SetStaticTextPosition()
    });
})
