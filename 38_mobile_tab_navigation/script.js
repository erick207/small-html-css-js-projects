const contentEls = document.querySelectorAll('.content')
const liEls = document.querySelectorAll('nav ul li')

liEls.forEach((liEl, idx) => 
    liEl.addEventListener('click', () => {
        if(!liEl.classList.contains('active')) {
            findRemoveAndAdd(liEls, idx, 'active')
            findRemoveAndAdd(contentEls, idx, 'show')
        }
    })
)

const findRemoveAndAdd = (els, idx, className) => {
    els.forEach(el => {
        el.classList.remove(className)
    })
    els[idx].classList.add(className)
}