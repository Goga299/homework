export default class HeaderFixed {
  constructor() {
    const header = document.querySelector('.header');

    if (!header) return;

    window.addEventListener('scroll', () => {
      header.classList.toggle('header--fixed', window.scrollY > 0);
    });
  }
}
