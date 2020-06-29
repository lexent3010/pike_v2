import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

gsap.registerPlugin(ScrollTrigger);

$(() => {

    window.onbeforeunload = () => {
        ScrollTrigger.refresh()
        scrollTo(0, 0)
    }

    gsap.timeline() // Анимация маски
        .fromTo('.green', {height: '100vh'}, {
            duration: 1,
            height: 0,
            onComplete: () => {
                $('.green').remove();
                $('.black').remove();
            }
        }, 0)
        .to('.black', {opacity: 0, delay: .7}, 0);

    gsap.timeline()  // Анимация шапки и логотипов
        .fromTo('.header', {y: 40, opacity: 0}, {y: 0, opacity: 1, delay: .7}, 0)
        .fromTo('#pike', {x: 50, opacity: 0}, {x: 0, opacity: 1, delay: .7}, 0)
        .fromTo('#medialab', {x: -50, opacity: 0}, {x: 0, opacity: 1, delay: .7}, 0)
        .fromTo('#mediaLabLite', {x: -50, opacity: 0}, {x: 0, opacity: 1, delay: .7}, 0);

    ScrollTrigger.create({ // Анимация логотипа в шапке, на скролл
        trigger: '.home-slide',
        start: '20% top',
        endTrigger: '.app-wrapper',
        toggleClass: {targets: '.header', className: 'header_animated'}
    });

    if ($(window).width() > 768) {
        const logoAnimation = gsap.timeline();
        logoAnimation   // Анимация логотипов на первом слайде, на скролл
            .fromTo('#pike', {x: 0}, {
                x: window.innerWidth
            }, 0)
            .fromTo('#medialab', {x: 0}, {
                x: -window.innerWidth
            }, 0)
            .fromTo('#mediaLabLite', {x: 0}, {
                x: window.innerWidth
            }, 0);

        ScrollTrigger.create({
            animation: logoAnimation,
            trigger: '.home-slide',
            scrub: true,
            start: 'top',
            end: 'bottom',
        })
    }

    ScrollTrigger.create({ // Анимация смены фона
        trigger: '.clients-slide',
        start: '50% top',
        endTrigger: '.app-wrapper',
        toggleClass: 'clients-slide_animated'
    })

    ScrollTrigger.create({ // Анимация смены фона
        trigger: '.clients-slide',
        start: '50% top',
        endTrigger: '.app-wrapper',
        toggleClass: {targets: '.products-slide', className: 'products-slide_animated'}
    })

    ScrollTrigger.create({ // Анимация смены цвета шапки
        trigger: '.clients-slide',
        start: '50% top',
        endTrigger: '.pml-slide',
        end: 'top 100',
        toggleClass: {targets: '.header__svg', className: 'header__svg_black'}
    })

    ScrollTrigger.create({ // Анимация смены цвета шапки
        trigger: '.integration-slide',
        start: 'top 100',
        endTrigger: '.integration-experience-slide',
        end: 'top 100',
        toggleClass: {targets: '.header__svg', className: 'header__svg_black'}
    })

    ScrollTrigger.create({ // Анимация смены цвета шапки
        trigger: '.feedback-slide',
        start: 'top 100',
        endTrigger: '.footer',
        end: 'bottom 100',
        toggleClass: {targets: '.header', className: 'header_opacity'}
    })

    const countUp = gsap.timeline();

    countUp // Набегающие цифры
        .from("#presentation-element-1", {
            y: 100,
            opacity: 0,
            onStart: () => {
                $('#number-1').animateNumber(
                    {
                        number: 10000,
                        numberStep: $.animateNumber.numberStepFactories.separator(' ')
                    },
                    {
                        easing: 'linear',
                        duration: 400
                    }
                );
            }
        }, 0)
        .from("#presentation-element-2", {
            y: 100,
            opacity: 0,
            delay: .2,
            onStart: () => {
                $('#number-2').animateNumber(
                    {
                        number: 20
                    },
                    {
                        easing: 'linear',
                        duration: 400
                    }
                );
            }
        }, 0)
        .from("#presentation-element-3", {
            y: 100,
            opacity: 0,
            delay: .4,
            onStart: () => {
                $('#number-3').animateNumber(
                    {
                        number: 50
                    },
                    {
                        easing: 'linear',
                        duration: 400
                    }
                );
            }
        }, 0)
        .from("#presentation-element-4", {
            y: 100,
            opacity: 0,
            delay: .6,
            onStart: () => {
                $('#number-4').animateNumber(
                    {
                        number: 20
                    },
                    {
                        easing: 'linear',
                        duration: 400
                    }
                );
            }
        }, 0)

    ScrollTrigger.create({ // Анимация набегающих цифр
        animation: countUp,
        trigger: '.clients-slide',
        once: true,
        start: 'top 80%',
    })

    const clientSliderAnimation = gsap.timeline();
    clientSliderAnimation
        .fromTo('.clients-block__navigation', {y: 100, opacity: 0}, {y: 0, opacity: 1}, 0)
        .fromTo('.clients-slider', {x: 350, opacity: 0}, {x: 0, opacity: 1, delay: .5}, 0);

    ScrollTrigger.create({ // Анимация слайдера клиентов
        animation: clientSliderAnimation,
        trigger: '.clients-slide',
        start: 'top 40%'
    });

    const firstProdAnimation = gsap.timeline();
    firstProdAnimation
        .fromTo('.first-product__product-name', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.first-product__product-description', {y: 100, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: .3,
            ease: "power3.out"
        }, 0)
        .fromTo('.first-product__product-logo', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)

    ScrollTrigger.create({ // Анимация первого продукта
        animation: firstProdAnimation,
        trigger: '.first-product',
        start: 'top 60%'
    });

    const secondProdAnimation = gsap.timeline();
    secondProdAnimation
        .fromTo('.second-product__product-name', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.second-product__product-description', {y: 100, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: .3,
            ease: "power3.out"
        }, 0)
        .fromTo('.second-product__product-logo', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.second-product__rotate-text-container', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.second-product__static-text', {opacity: 0}, {opacity: 1, duration: 1, delay: .7}, 0)

    ScrollTrigger.create({ // Анимация второго продукта
        animation: secondProdAnimation,
        trigger: '.second-product',
        start: 'top 60%'
    });

    const rotateText1 = gsap.timeline();
    rotateText1
        .to('#feature-text1', {rotate: 250})

    ScrollTrigger.create({ // Анимация вращения текста
        animation: rotateText1,
        trigger: '.products-slide',
        scrub: true
    });

    const thirdProdAnimation = gsap.timeline();
    thirdProdAnimation
        .fromTo('.third-product__product-name', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.third-product__product-description', {y: 100, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: .3,
            ease: "power3.out"
        }, 0)
        .fromTo('.third-product__product-logo', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)

    ScrollTrigger.create({ // Анимация третьего продукта
        animation: thirdProdAnimation,
        trigger: '.third-product',
        start: 'top 60%'
    });

    const fourthProdAnimation = gsap.timeline();
    fourthProdAnimation
        .fromTo('.fourth-product__product-name', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.fourth-product__product-description', {y: 100, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: .3,
            ease: "power3.out"
        }, 0)
        .fromTo('.fourth-product__product-logo', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.fourth-product__rotate-text-container', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.fourth-product__static-text', {opacity: 0}, {opacity: 1, duration: 1, delay: .7}, 0)

    ScrollTrigger.create({ // Анимация четвертого продукта
        animation: fourthProdAnimation,
        trigger: '.fourth-product',
        start: 'top 60%'
    })

    const rotateText2 = gsap.timeline();
    rotateText2
        .to('#feature-text2', {rotate: 360})

    ScrollTrigger.create({ // Анимация вращения текста
        animation: rotateText2,
        trigger: '.products-slide',
        scrub: true,
        start: 'top top',
        endTrigger: '.integration-slide',
        end: 'bottom bottom'
    });

    const pmlAnimationEnd = gsap.timeline();
    pmlAnimationEnd
        .fromTo('.pml-slide__item', {x: 0}, {x: window.innerWidth, duration: 1, stagger: -.1, ease: "power2.in"})

    ScrollTrigger.create({ // Анимация исчезания текста pml
        animation: pmlAnimationEnd,
        trigger: '.pml-slide',
        start: 'bottom 50%',
        toggleActions: "restart none none reverse"
    });

    const pmlAnimationStart = gsap.timeline();
    pmlAnimationStart
        .fromTo('.pml-slide__item', {x: -window.innerWidth}, {x: 0, duration: 1, stagger: -.1, ease: "power2.out"})

    ScrollTrigger.create({ // Анимация появления текста pml
        animation: pmlAnimationStart,
        trigger: '.pml-slide',
        start: 'top 50%',
        toggleActions: "restart none none reverse"
    });


    const intSlideAnimation = gsap.timeline();
    intSlideAnimation
        .fromTo('.integration-slide__title', {y: 60, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: .1}, 0)
        .fromTo('.integration-slide__background-item', {x: -30, opacity: 0}, {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: .1,
            delay: .3
        }, 0)
        .fromTo('.integration-slide__item', {x: -30, opacity: 0}, {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: .1,
            delay: .6
        }, 0)

    ScrollTrigger.create({ // Анимация слайда интеграции
        animation: intSlideAnimation,
        trigger: '.integration-slide',
        start: 'top 50%'
    });

    const intSliderAnimation = gsap.timeline();
    intSliderAnimation
        .fromTo('.integration-experience-slide__navigation', {y: 150, opacity: 0}, {y: 0, opacity: 1}, 0)
        .fromTo('.integration-experience-slider', {x: 350, opacity: 0}, {x: 0, opacity: 1, delay: .5}, 0);

    ScrollTrigger.create({   // Анимация слайдера интеграций
        animation: intSliderAnimation,
        trigger: '.integration-experience-slide',
        start: 'top 40%'
    });

    const feedBackAnimation = gsap.timeline();
    feedBackAnimation
        .fromTo('.feedback-form__title', {y: 150, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
        .fromTo('.feedback-form__description', {y: 150, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: .3}, 0)
        .fromTo('.feedback-form__input-item', {y: 150, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: .3}, 0)
        .fromTo('.feedback-form__send-button', {y: 150, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: .5,
            ease: "power2.out"
        }, 0)

    ScrollTrigger.create({ // Анимация слайда интеграции
        animation: feedBackAnimation,
        trigger: '.feedback-slide',
        start: 'top 50%'
    });

    $('#feedback-btn').click(() => {
        $('.popup-feedback-form').css('display', 'flex')
        const popupAnimation = gsap.timeline();
        popupAnimation
            .fromTo('.popup-feedback-form__title', {y: 150, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0)
            .fromTo('.popup-feedback-form__description', {y: 150, opacity: 0}, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: .3
            }, 0)
            .fromTo('.popup-feedback-form__input-item', {y: 150, opacity: 0}, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: .3
            }, 0)
            .fromTo('.popup-feedback-form__send-button', {y: 150, opacity: 0}, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: .5,
                ease: "power2.out"
            }, 0)
    })

    $('.popup-feedback-form__close').click(() => {
        $('.popup-feedback-form').css('display', 'none')
    })

});

