(function() {
    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // модалка
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
};
    // Табф

    const tabControls = document.querySelector('.tab-conrols')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-conrols__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-conrols__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-conrols__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        activeContent.classList.remove('tab-content--show')
        activeControl.classList.remove('tab-conrols__link--active')
        
        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-conrols__link--active')

    };

    // аккордион

    const accorrdionLists = document.querySelectorAll('.accordion-list');

    accorrdionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accorrdionLists = e.currentTarget
            const accorrdionOpenedItem = accorrdionLists.querySelector('.accordion-list__item--openend')
            const accorrdionOpenedContent = accorrdionLists.querySelector('.accordion-list__item--openend .accordion-list__content')
            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accorrdionOpenedItem && accordionItem != accorrdionOpenedItem) {
                accorrdionOpenedItem.classList.remove('accordion-list__item--openend');
                accorrdionOpenedContent.style.maxHeight = null;
            }
            
            accordionItem.classList.toggle('accordion-list__item--openend');

            if (accordionItem.classList.contains('accordion-list__item--openend')){
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        })
    })

    // слайдеры
    
    const swiper = new Swiper('.swiper', {

        spaceBetween: 15,
        slidesPerView: 1.5,

    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
    },
    
    breakpoints: {
        601: {
            slidesPerView: 3,
        },
        801: {
            spaceBetween: 32,
        },
        1101: {
            slidesPerView: 4,
        }
    }
});
})();

