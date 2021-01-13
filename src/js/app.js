document.addEventListener("DOMContentLoaded", function () {
    // ACCORDIONS
    const devicesName = document.querySelectorAll('.devices__name')
    
    if (devicesName) {
        devicesName.forEach((item) =>
            item.addEventListener('click', () => {
                const parent = item.parentNode.parentNode.parentNode.parentNode
                const content = document.querySelector('.devices__content')

                if (parent.classList.contains('devices__item--active')) {
                    parent.classList.remove('devices__item--active')
                } else {
                    document.querySelectorAll('.devices__item').forEach((child) => {
                        child.classList.remove('devices__item--active')
                    })
                    parent.classList.add('devices__item--active')
                }
            })
        )
    }

    const circleCheckbox = document.querySelectorAll('.circle-checkbox')

    if (circleCheckbox) {
        circleCheckbox.forEach((item) =>
            item.addEventListener('click', () => {
                document.querySelectorAll('.package__item').forEach((child) => {
                    child.classList.remove('package__item--active')
                })

                const parent = item.parentNode.parentNode
                parent.classList.add('package__item--active')
            })
        )
    }

    // SELECT
    const devicesSelect = document.querySelectorAll('.devices__select')

    if (devicesSelect) {
        devicesSelect.forEach((item) => {
            item.addEventListener('change', () => {
                item.classList.add('devices__select--active')
            })
        })
    }

    // CHECKBOX DISABLED
    const licensesCheckbox = document.getElementById('licenses-checkbox')
    const licensesWrapper = document.getElementById('licenses-wrapper')

    if (licensesCheckbox) {
        licensesCheckbox.addEventListener('change', () => {
            if (licensesCheckbox.checked) {
                licensesWrapper.classList.remove('devices__wrap--disabled')
                licensesWrapper.querySelectorAll('.devices__input').forEach((item) =>
                    item.removeAttribute('disabled')
                )
            } else {
                licensesWrapper.classList.add('devices__wrap--disabled')
                licensesWrapper.querySelectorAll('.devices__input').forEach((item) =>
                    item.setAttribute('disabled', 'disabled')
                )
            }
        })
    }

    // ANIMATION
    var controller = new ScrollMagic.Controller();

    if ( window.matchMedia('(min-width: 992px)').matches ) { //на 991- круги статичные
        animateBlueCircles(controller); //параллакс синих кругов
    }

    //паралакс синих фоновых кругов
    function animateBlueCircles(controller) {

        var circleBrandsTween = TweenMax.to('.circle__brands', 1, {y: -540, scale: 1.35, ease: Power0.easeNone});
        var circleBrands = new ScrollMagic.Scene({triggerElement: '.header__container', triggerHook: 0, duration: 1100})
            .setTween(circleBrandsTween);
        var circleBrands2Tween = TweenMax.to('.circle__brands2', 1, {x: -900, y: 760, scale: 1.2, ease: Power0.easeNone});
        var circleBrands2 = new ScrollMagic.Scene({triggerElement: '.front-intro', triggerHook: 0, duration: 2000})
            .setTween(circleBrands2Tween);
        var circleFooterTween = TweenMax.to('.circle__footer', 1, {x: 800, y: 440, ease: Power0.easeNone});
        var circleFooter = new ScrollMagic.Scene({triggerElement: '.footer', offset: -350, triggerHook: 1, duration: 500})
            .setTween(circleFooterTween);
        var circleConfTween = TweenMax.to('.circle__conf', 1, {x: 600, y: 200, ease: Power0.easeNone});
        var circleConf = new ScrollMagic.Scene({triggerElement: '.front-conf', offset: -100, triggerHook: 1, duration: 1000})
            .setTween(circleConfTween);
        controller.addScene([circleBrands, circleBrands2, circleFooter, circleConf]);

        var circleDaas1fTween = TweenMax.to('.circle__daas1', 1, {y: -640, x: 300, scale: 1.2, ease: Power0.easeNone});
        var circleDaas1 = new ScrollMagic.Scene({triggerElement: '.daas-items', offset: 50, triggerHook: 1, duration: 1100})
            .setTween(circleDaas1fTween);
        var circleDaas2fTween = TweenMax.to('.circle__daas2', 1, {x: 450, y: 200, scale: 1.1, ease: Power0.easeNone});
        var circleDaas2 = new ScrollMagic.Scene({triggerElement: '.daas-items', offset: 50, triggerHook: 1, duration: 1100})
            .setTween(circleDaas2fTween);
        controller.addScene([circleDaas2, circleDaas1]);

        var circletradein1fTween = TweenMax.to('.circle__tradein1', 1, {y: 440, x: 300, scale: 1.1, ease: Power0.easeNone});
        var circletradein1 = new ScrollMagic.Scene({triggerElement: '.tradein-items', offset: 100, triggerHook: 1, duration: 1000})
            .setTween(circletradein1fTween);
        var circletradein2fTween = TweenMax.to('.circle__tradein2', 1, {x: 50, y: -550, scale: 1.1, ease: Power0.easeNone});
        var circletradein2 = new ScrollMagic.Scene({triggerElement: '.tradein-items', offset: 100, triggerHook: 1, duration: 1000})
            .setTween(circletradein2fTween);
        controller.addScene([circletradein2, circletradein1]);


        var circlePriceTween = TweenMax.to('.circle__price', 1, {x: 450, y: 100, ease: Power0.easeNone});
        var circlePrice = new ScrollMagic.Scene({triggerElement: '.price-desc', offset: -100, triggerHook: 1, duration: 850})
            // .addIndicators('price1')
            .setTween(circlePriceTween);
        controller.addScene([circlePrice]);
    }
});