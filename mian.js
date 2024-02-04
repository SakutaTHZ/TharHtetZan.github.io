window.addEventListener("keyup", (e) => {
    if(e.key == "Escape") {
        menu && menu.classList.contains('navOpen')?menu.classList.remove('navOpen'):menu.classList.add('navOpen')
        navLinkBox && navLinkBox.classList.contains('navLinkBoxOpen')?navLinkBox.classList.remove('navLinkBoxOpen'):navLinkBox.classList.add('navLinkBoxOpen')
    }
})