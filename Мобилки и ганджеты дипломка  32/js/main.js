(function() { 
  document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__inner')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    
const swiper = new Swiper('.swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

    const searchInput = document.getElementById('searchInput');
    const tags = document.querySelectorAll('.tag');

    tags.

    // Бургер

forEach(tag => {
      tag.addEventListener('click', function() {

        this.classList.toggle('active');

        const activeTags = Array.from(document.querySelectorAll('.tag.active'))
        .map(t => t.getAttribute('data-keyword'));

        if (activeTags.length > 0) {
          searchInput.value = activeTags.join(' ');
        } else {
          searchInput.value = '';
        }
        searchInput.focus();
      });
    });

    // Поиск
    const searchBox = document.getElementById('searchBox');
    const input = searchBox.querySelector('.search-input');
    const btn = searchBox.querySelector('.search-btn');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      searchBox.classList.toggle('active');
      if (searchBox.classList.contains('active')) {
        input.focus();  
      }
    });
    input.addEventListener('keydown', function(event){
      if(event.key === 'Enter') {
        input.value = '';
      }
    });

  // выпадающее меню
    const modal = document.querySelector('.header__modal');
    const img = document.querySelector('.solutions__img');

    img.addEventListener('click', (e) => {
      e.stopPropagation();
      modal.classList.toggle('active');
      if (modal.classList.contains('active'));
    });

    
})()

