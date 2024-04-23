document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,MotionPathPlugin,TextPlugin)

    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".marquee_contentBox",
            start: "-100px center",
            end: ()=> "+="+(document.querySelector('.marquee_contentBox').offsetHeight+300),
            scrub:2,
        },
    })

    let tl2 = gsap.timeline({scrollTrigger:{
            trigger: ".marquee",
            start: "-100px center",
            end: ()=> "+="+(document.querySelector('.marquee').offsetHeight+500),
            scrub:1,
        },
    })

    tl.to(".marquee_contentBox", {
        x:-(window.innerWidth>500 ? 300 : 500),
        duration: 5
    })
    tl2.to(".marquee", {
        rotate:-4,
        duration: 3
    })
});