import jQuery from "jquery";

window.$ = window.jQuery = jQuery;
import Inputmask from "inputmask";
import slick from "slick-carousel";
import SmoothScroll from "smoothscroll-for-websites"


$(() => {

    SmoothScroll({stepSize: 100, animationTime: 500})

    $('.clients-slider').slick({ // Слайдер клиентов
        variableWidth: true,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        nextArrow: '#next-client',
        prevArrow: '#previous-client',
        responsive: [{
            breakpoint: 1650,
            settings: {
                slidesToShow: 2,
            }
        },
            {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $('.integration-experience-slider').slick({ // Слайдер слайда интеграций
        variableWidth: true,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        nextArrow: '#next-int',
        prevArrow: '#previous-int',
        responsive: [{
            breakpoint: 1650,
            settings: {
                slidesToShow: 2,
            }
        },
            {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    const nameOnBlur = () => {  // Проверка имени
        if ($("input[id='name']").val().length >= 1) {
            $("textarea[id='message']").attr('placeholder', `${$("input[id='name']").val()}, возникли вопросы или хотите оценить стоимость проекта? Оставьте заявку и наш менеджер с вами свяжется.`)
        } else if ($("input[id='name']").val().length < 1) {
            $('.feedback-form__item-1').css('border-bottom', '2px solid red')
            $('.feedback-form__name-validation').css('display', 'block')
        }
    }

    const nameOnFocus = () => {
        $('.feedback-form__item-1').css('border-bottom', '2px solid white')
        $('.feedback-form__name-validation').css('display', 'none')
    }

    const phoneOnBlur = () => {
        if ($("input[id='phone']").val().length < 18 && $("input[id='phone']").val().length >= 1) {
            $('.feedback-form__item-2').css('border-bottom', '2px solid red')
            $('.feedback-form__phone-validation_format').css('display', 'block')
        } else if ($("input[id='phone']").val().length < 1) {
            $('.feedback-form__item-2').css('border-bottom', '2px solid red')
            $('.feedback-form__phone-validation').css('display', 'block')
        }
    }

    const phoneOnFocus = () => {
        $('.feedback-form__item-2').css('border-bottom', '2px solid white')
        $('.feedback-form__phone-validation').css('display', 'none')
        $('.feedback-form__phone-validation_format').css('display', 'none')
    }

    const messageOnBlur = () => {  // Проверка сообщения
        if ($("textarea[id='message']").val().length < 1) {
            $('.feedback-form__item-3').css('border-bottom', '2px solid red')
            $('.feedback-form__message-validation').css('display', 'block')
        }
    }

    const messageOnFocus = () => {
        $('.feedback-form__item-3').css('border-bottom', '2px solid white')
        $('.feedback-form__message-validation').css('display', 'none')
    }

    $("input[id='name']").blur(nameOnBlur);

    $("input[id='name']").focus(nameOnFocus)

    Inputmask({mask: "+7 (999) 999-99-99", jitMasking: true, showMaskOnHover: null}).mask('#phone')   // Макса для номера телефона и проверка
    $("input[id='phone']").blur(phoneOnBlur);

    $("input[id='phone']").focus(phoneOnFocus)

    $("textarea[id='message']").blur(messageOnBlur);

    $("textarea[id='message']").focus(messageOnFocus)

    $('.feedback-form__send-button').click(() => {
        if ($("input[id='name']").val().length >= 1 && $("input[id='phone']").val().length >= 18 && $("textarea[id='message']").val().length >= 1) {
            $('.feedback-form__input-list').animate({opacity: 0})
            $('.feedback-form__description').replaceWith('<div class="feedback-form__description popup-feedback-form__description subtitle send-success">Спасибо! В течении дня с вами свяжется наш менеджер для уточнения деталей проекта.</div>')
        } else {
            nameOnBlur()
            phoneOnBlur()
            messageOnBlur()
        }
    })
})
