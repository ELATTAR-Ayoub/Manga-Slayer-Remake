const navMenu_btn = document.getElementById('OpenSideNav-btn');
const sideNav = document.getElementById('sideNav');
const closeNav_btn = document.getElementById('closeSideNav-btn');



// sideBar Functions
navMenu_btn.addEventListener('click', (e) => {
    navMenu_btn.classList.toggle("rotateBaricn");
    if (navMenu_btn.classList.contains('rotateBaricn')) {
        openNav();
    }
    else {
        closeNav();
    }
});

document.querySelector('main').addEventListener('click', (e) => {
    closeNav();
    navMenu_btn.classList.toggle("rotateBaricn");
});
// sideBar Functions (end)



/* Set the width of the side navigation to 250px */
function openNav() {
    sideNav.style.width = "250px";
    document.querySelector('main').style.marginLeft = "250px";
    // document.body.style.filter = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sideNav.style.width = "0";
    document.querySelector('main').style.marginLeft = "0";
}
