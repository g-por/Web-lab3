document.addEventListener('DOMContentLoaded', function () {
    const menuLogin = document.getElementById('menu-login');
    const burgerMenu = document.getElementById('burger-menu');
    const header = document.querySelector('header');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const body = document.body;

    function openBurgerMenu() {
        burgerMenu.classList.add('active');
        menuLogin.style.backgroundImage = 'url("../source/close.png")';
    }

    function closeBurgerMenu() {
        burgerMenu.classList.remove('active');
        menuLogin.style.backgroundImage = 'url("../source/member.png")';
    }

    menuLogin.addEventListener('click', function () {
        if (burgerMenu.classList.contains('active')) {
            closeBurgerMenu();
        } else {
            openBurgerMenu();
        }
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > header.clientHeight) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    });

    menuToggle.addEventListener('click', openBurgerMenu);
    closeMenu.addEventListener('click', closeBurgerMenu);
});
