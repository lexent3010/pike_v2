import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import Inputmask from "inputmask";
import slick from "slick-carousel";
import SmoothScroll from "smoothscroll-for-websites"


$(() => {

    SmoothScroll({stepSize: 100, animationTime: 500})

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

    $("input[id='name']").blur(() => {  // Проверка имени
        if ($("input[id='name']").val().length >= 1) {
            $("textarea[id='message']").attr('placeholder', `${$("input[id='name']").val()}, возникли вопросы или хотите оценить стоимость проекта? Оставьте заявку и наш менеджер с вами свяжется.`)
        } else if ($("input[id='name']").val().length < 1) {
            $('.feedback-form__item-1').css('border-bottom', '2px solid red')
            $('.feedback-form__name-validation').css('display', 'block')
        }
    });

    $("input[id='name']").focus(()=> {
        $('.feedback-form__item-1').css('border-bottom', '2px solid #01da00')
        $('.feedback-form__name-validation').css('display', 'none')
    })

    let validationForm = () => {
        Inputmask({mask: "+7 (999) 999-99-99", jitMasking: true, showMaskOnHover: null}).mask('#phone')   // Макса для номера телефона и проверка
        $("input[id='phone']").blur(() => {
            if ($("input[id='phone']").val().length < 18) {
                $('.feedback-form__item-2').css('border-bottom', '2px solid red')
                $('.feedback-form__phone-validation').css('display', 'block')
            }
        });

        $("input[id='phone']").focus(() => {
            $('.feedback-form__item-2').css('border-bottom', '2px solid #01da00')
            $('.feedback-form__phone-validation').css('display', 'none')
        })

        $("textarea[id='message']").blur(() => {  // Проверка сообщения
            if ($("textarea[id='message']").val().length < 1) {
                $('.feedback-form__item-3').css('border-bottom', '2px solid red')
                $('.feedback-form__message-validation').css('display', 'block')
            }
        });

        $("textarea[id='message']").focus(() => {
            $('.feedback-form__item-3').css('border-bottom', '2px solid #01da00')
            $('.feedback-form__message-validation').css('display', 'none')
        })
    }
    validationForm()

    $('.feedback-form__send-button').click(() => {
        if ($("input[id='name']").val().length >= 1 && $("input[id='phone']").val().length >= 18 && $("textarea[id='message']").val().length >= 1) {
            $('.feedback-form__input-list').animate({opacity: 0})
            $('.feedback-form__description').replaceWith('<div class="feedback-form__description popup-feedback-form__description subtitle send-success">Спасибо! В течении дня с вами свяжется наш менеджер для уточнения деталей проекта.</div>')
        }
    })

    window.addEventListener('resize',() => {
        SetStaticTextPosition()
    });
})
