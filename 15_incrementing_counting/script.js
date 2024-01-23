const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        // '+' converts the string to number
        const target = +counter.getAttribute('data-target')
        // +'' converts to 0
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})