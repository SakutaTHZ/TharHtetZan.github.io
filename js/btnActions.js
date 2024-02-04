// Side Bar Action
const menu = document.querySelector(".menu")
const navLinkBox = document.querySelector(".navLinkBox")

const navs = document.querySelectorAll('.navLinkBox>li')

menu.addEventListener("click", () => {
    // Add / Remove class
    menu && menu.classList.contains('navOpen')?menu.classList.remove('navOpen'):menu.classList.add('navOpen')
    navLinkBox && navLinkBox.classList.contains('navLinkBoxOpen')?navLinkBox.classList.remove('navLinkBoxOpen'):navLinkBox.classList.add('navLinkBoxOpen')
})

document.querySelector(".closeBox").addEventListener("click", () => {
    // Add / Remove class
    menu && menu.classList.contains('navOpen')?menu.classList.remove('navOpen'):menu.classList.add('navOpen')
    navLinkBox && navLinkBox.classList.contains('navLinkBoxOpen')?navLinkBox.classList.remove('navLinkBoxOpen'):navLinkBox.classList.add('navLinkBoxOpen')
})

document.querySelector(".checkMore").addEventListener("click", () => {
    // Scroll to the target div smoothly
  document.querySelector('.aboutMeSection').scrollIntoView({ behavior: 'smooth' });
})

navs.forEach(nav => {
    nav.addEventListener("click", () => {
        removeActive(navs)
        nav.classList.add('activeNav')
    })
})

const removeActive= (navs,()=>{
    navs.forEach(element => {
        element.classList.remove('activeNav')
    })
})
