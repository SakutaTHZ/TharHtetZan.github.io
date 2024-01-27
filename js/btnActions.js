// Side Bar Action
const menu = document.querySelector(".menu");
const navLinkBox = document.querySelector(".navLinkBox");

menu.addEventListener("click", () => {
    console.log("Open Menu")
    // Add / Remove class
    menu && menu.classList.contains('navOpen')?menu.classList.remove('navOpen'):menu.classList.add('navOpen')
    navLinkBox && navLinkBox.classList.contains('navLinkBoxOpen')?navLinkBox.classList.remove('navLinkBoxOpen'):navLinkBox.classList.add('navLinkBoxOpen')
});

const navLinks = document.querySelectorAll('.navLinkBox > li')
const currentNav = document.querySelector('.currentNav')
navLinks.forEach(nav => {
    nav.addEventListener("click",()=>{
        // Darken the navLinkBox background
        navLinkBox.classList.add('darken')
        console.log(`${nav.innerText} Opened`)
        navLinks.forEach(allnav => {
            allnav.classList.remove('activeNav')
        })
        nav.classList.add('activeNav')
        nav.classList.add('navClicked')
        setTimeout(() => {
            menu.classList.remove('navOpen')
            navLinkBox.classList.remove('navLinkBoxOpen')
        }, 2500);
        setTimeout(() => {
            nav.classList.remove('navClicked')
            navLinkBox.classList.remove('darken')
        }, 3000);
        currentNav.innerHTML=nav.dataset.name
    })
});