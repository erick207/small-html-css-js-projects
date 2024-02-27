const container = document.getElementById('container')

// apparently doesn't repeat images as the same dimensions aren't used twice
let x = 329
let y = 271

for(let i = 0; i < 30; i++) {
    const imgEl = document.createElement('img')
    imgEl.src = `https://source.unsplash.com/random/${x - i}x${y + i}`

    container.appendChild(imgEl)
}

/* const unsplashURL = 'https://source.unsplash.com/random/'
const minSize = 300
const rows = 10

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`

    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + minSize
} */
