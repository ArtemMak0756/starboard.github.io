if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.2,
        effects: true
    });
}