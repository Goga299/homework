export default class BurgerMenu {
    constructor(config, headerFixedInstance = null) {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const body = document.body;

    if (!burger || !menu) return;

    burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('burger--open');
    menu.classList.toggle('header__menu--open', isOpen);
    body.classList.toggle('page__body--no-scroll', isOpen);
    body.classList.toggle('page__body--no-pointer', isOpen);
    });
    const menuLinks = menu.querySelectorAll('a');

    menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // закрываем меню
        burger.classList.remove('burger--open');
        menu.classList.remove('header__menu--open');
        body.classList.remove('page__body--no-scroll');
        body.classList.remove('page__body--no-pointer'); 
    });
    });
}
}

const icon = document.querySelector('.header__actions-button');
    const input = document.querySelector('.search__input');

    icon.addEventListener('click', () => {
    input.classList.toggle('active');

      // если поле стало видимым — фокусируемся на нём
      if (input.classList.contains('search__input--open')) {
        input.focus();
      }
    });


