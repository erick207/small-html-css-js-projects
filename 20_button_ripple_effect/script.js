const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {

    // can't have an arrow function and use `this` together
    button.addEventListener('click', function(e) {
        // viewport click coordinates 
        const x = e.clientX
        const y = e.clientY

        // button coordinates
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})