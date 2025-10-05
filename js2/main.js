const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body

const openModal = () => {
    body.classList.add('body--fixed')
}
const closeModal = () => {
    body.classList.remove('body--fixed')
}


btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.classList.contains('modal') || target.classList.contains('model__close-btn')) {
        modal.classList.remove('modal--open')
    }
})

document.addEventListener('keydown', event => {
    if ( event.code === 'Space' && modal.classList.contains('modal--open'))  {
        modal.classList.toggle('modal--open')
    }
})