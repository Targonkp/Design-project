let menu = document.querySelector('.header-wrap');
document.querySelector('.burger-menu').addEventListener(
    'click',
    () => {
        menu.classList.toggle('burger-menu-active');
    }
);

document.querySelector('.interior-menu').addEventListener(
    'click',
    (event) => {
        if (event.target.classList.contains('interior-menu__text'))
        {
            document.querySelectorAll('.interior-menu__text').forEach(
                item => item.classList.remove('interior-menu__text_active')
            )
            event.target.classList.add('interior-menu__text_active');
        }
    }
)

document.querySelector('.header-menu').addEventListener(
    'click',
    (event) => {
        if (event.target.classList.contains('header-menu__link')){
            document.querySelectorAll('.header-menu__link').forEach(
                item => item.classList.remove('header-menu__link_active')
            )
            event.target.classList.add('header-menu__link_active');
        }
    }
)

function animation (){
    let companyNameEl = document.querySelector('.header-company-name');
    companyNameEl.style.animationDuration = '2s';
}

animation ();

