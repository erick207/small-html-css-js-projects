const boxes = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxes.classList.toggle('big'))

/* boxes.children.forEach((box, idx) => {
    console.log(idx)
    const x = -150
    const y = -150
    box.styles.backgroundPosition = `$-125px -125px`
}) */

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
        const x = -125 * j
        const y = -125 * i
        
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.backgroundPosition = `${x}px ${y}px`
        boxes.appendChild(box)
        
    }
}

