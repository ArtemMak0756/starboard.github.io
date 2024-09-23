if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.2,
        effects: true
    });

    gsap.fromTo('.preview__titletext', { opacity: 2 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.header',
                start: 'top center',
                end: '820',
                scrub: true,
            }
        }
    );

    gsap.fromTo('.preview1', { opacity: 2 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.preview__titletext--subtitle',
                start: 'top center',
                end: '820',
                scrub: true,
            }
        }
    );

    gsap.fromTo('.messaging__container', { opacity: 0 }, {
            opacity: 2,
            scrollTrigger: {
                trigger: '.profiles__company-share',
                start: 'top center',
                end: '2300',
                scrub: true,
            }
        }
    );

    gsap.fromTo('.preview2', { opacity: 0 }, {
            opacity: 2,
            scrollTrigger: {
                trigger: '.profiles__company-share',
                start: 'top center',
                end: '2300',
                scrub: true,
            }
        }
    );
}