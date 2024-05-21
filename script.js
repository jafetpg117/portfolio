document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const curtains = document.querySelectorAll('.curtain');

    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.classList.toggle('open');
        nav.classList.toggle('open');

        if (isOpen) {
            gsap.timeline()
                .to(curtains, {
                    duration: 0.6,
                    y: 0,
                    stagger: 0.03,
                    ease: "expo.out"
                })
                .to(nav, {
                    duration: 0.6,
                    y: 0,
                    ease: "expo.out"
                }, "+=0.2"); // Ensure nav animates after curtains finish falling
        } else {
            gsap.timeline()
                .to(nav, {
                    duration: 0.6,
                    y: "-100%",
                    ease: "expo.out"
                })
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
