const sr = ScrollReveal();
sr.reveal(".icon-tools .text-guide", {
    delay: 200,
    reset:true,
    easing: "ease-out",
    interval: 200,
    scale: 1.5,
});

sr.reveal(".scroll-wheel", {
    origin:'bottom',
    distance: '100%',
    delay: 2000,
    reset:true,
    easing: "ease-out",
    interval: 200,
    scale: 1.5,
    opacity:0
});

sr.reveal(".download-btn", {
    origin:'left',
    distance: '100%',
    delay: 500,
    reset:true,
    easing: "ease-out",
    interval: 200,
    scale: 1.5,
});
sr.reveal("footer h2", {
    origin:'top',
    distance: '100%',
    delay: 200,
    reset:true,
    easing: "ease-out",
    interval: 200,
    scale: 1.5,
});
sr.reveal("small", {
    origin:'bottom',
    distance: '100%',
    delay: 500,
    reset:true,
    easing: "ease-out",
    interval: 200,
    scale: 1.5,
});



const cursorRounded = document.querySelector('.rounded');
const hoverTriggers = document.querySelectorAll('a, .text-guide');
const moveCursor = (e)=> {
    const mouseY = e.clientY - 15;
    const mouseX = e.clientX - 15;
    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
hoverTriggers.forEach(hoverTrigger => {
    hoverTrigger.addEventListener('mouseover', () => {
        cursorRounded.classList.add('large');
    });
    hoverTrigger.addEventListener('mouseout', () => {
        cursorRounded.classList.remove('large');
    });
})
window.addEventListener('mousemove', moveCursor);

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
if (window.innerWidth > 991) {
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

$(document).ready(function() {
    $(".social-media, .img, .centered-about").addClass("animation");
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.2, 0.2);
});