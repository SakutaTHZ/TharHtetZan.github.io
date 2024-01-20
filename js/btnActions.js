// Side Bar Action
const menu = document.querySelector(".menu");

window.addEventListener("click", () => {
    console.log("Open Menu")
    // Add / Remove class
    menu && menu.classList.contains('navOpen')?menu.classList.remove('navOpen'):menu.classList.add('navOpen')
});
