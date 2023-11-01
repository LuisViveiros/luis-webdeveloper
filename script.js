
// Function to apply GSAP horizontal scroll when the display width is over 800px
/*
function applyHorizontalScroll() {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + (sections.length - 1) * window.innerWidth,
        },
    });
}
// Check the window width and apply the effect if it's over 800px
if (window.innerWidth > 800) {
    applyHorizontalScroll();
}
// Lenis initialization (always active)
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
*/
function applyHorizontalScroll() {
    gsap.registerPlugin(ScrollTrigger);
    const container = document.querySelector(".container");
    if (window.innerWidth > 800 && container) {
        const sections = gsap.utils.toArray(".panel");
        const scrollTriggerOptions = {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (sections.length - 1) * window.innerWidth,
        };
        gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: scrollTriggerOptions,
        });
    }
}
// Check the window width and apply the effect if it's over 800px
if (window.innerWidth > 800) {
    applyHorizontalScroll();
    // Lenis initialization (always active)
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('beforeunload', function () {
    // Clean up resources or event listeners here.
    // For example, you can remove the scroll trigger or any other cleanup tasks.
    // Scroll to the top of the page before unloading
    window.scrollTo(0, 0);
});