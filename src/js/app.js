let menu = document.querySelector('.header-wrap');
document.querySelector('.burger-menu').addEventListener(
    'click',
    () => {
        menu.classList.toggle('burger-menu-active');
    }
)