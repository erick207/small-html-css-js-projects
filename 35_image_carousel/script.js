const imgs = document.getElementById('imgs')
const prev = document.getElementById('left')
const next = document.getElementById('right')

const imgWidth = 500
const minX = -((imgs.children.length - 1) * imgWidth)

let currentX = 0

let interval = setInterval(run, 2000)

const nextImg = new Event('click')

function run() {
    next.dispatchEvent(nextImg)
}

next.addEventListener('click', () => {
    currentX -= imgWidth
    if(currentX < minX) {
        currentX = 0
    }

    translateImg()
    resetInterval()
})

prev.addEventListener('click', () => {
    currentX += imgWidth
    if(currentX > 0) {
        currentX = minX
    }

    translateImg()
    resetInterval()
})

function translateImg() {
    imgs.style.transform = `translateX(${currentX}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}