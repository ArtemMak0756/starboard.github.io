document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("burger").addEventListener("click", function (){
        document.querySelector("header").classList.toggle("open");
    });
});


if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content1',
        smooth: 1.2,
        effects: true
    });

    gsap.fromTo('.preview', { opacity: 2 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.preview',
                start: 'top center',
                end: '820',
                scrub: true,
            }
        }
    );

    gsap.fromTo('.content__10x', {opacity:0.15},{
        opacity: 2,
        scrollTrigger: {
            trigger: '.content__10x',
            start: 'top center',
            end: '820',
            scrub: true,
        }
    });

    gsap.fromTo('.testimonials', {opacity:0},{
        opacity: 2,
        scrollTrigger: {
            trigger: '.button__content',
            start: 'top center',
            end: '820',
            scrub: true,
        }
    });
}