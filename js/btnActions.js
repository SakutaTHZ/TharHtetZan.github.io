// Side Bar Action
const menu = document.querySelector(".menu")
const navLinkBox = document.querySelector(".navLinkBox")

const navs = document.querySelectorAll('.navLinkBox>li')

menu.addEventListener("click", () => {
    console.log("Open Menu")
    // Add / Remove class
    menu && menu.classList.contains('navOpen')?menu.classList.remove('navOpen'):menu.classList.add('navOpen')
    navLinkBox && navLinkBox.classList.contains('navLinkBoxOpen')?navLinkBox.classList.remove('navLinkBoxOpen'):navLinkBox.classList.add('navLinkBoxOpen')
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