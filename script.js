document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const curtains = document.querySelectorAll('.curtain');

    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.classList.toggle('open');

        if (isOpen) {
            gsap.timeline()
                .to(curtains, {
                    duration: 0.6,
                    y: 0,
                    stagger: 0.03,
                    ease: "expo.out"
                })
                .set(nav, { display: 'block' }) // Show nav after curtains fall
                .to(nav, {
                    duration: 0.6,
                    y: 0,
                    ease: "expo.out",
                    delay: -0.3
                });
        } else {
            gsap.timeline()
                .to(nav, {
                    duration: 0.6,
                    y: "-100%",
                    ease: "expo.out"
                })
                .set(nav, { display: 'none' }) // Hide nav after it moves up
                .to(curtains, {
                    duration: 0.6,
                    y: "-100%",
                    stagger: 0.03,
                    ease: "expo.out",
                    delay: 0.1
                });
        }
    });
});
