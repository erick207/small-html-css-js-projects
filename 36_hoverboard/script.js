const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22, #2ecc71', '#eee82c', '#ffafc5', 'dea47e']
const SQUARES = 500;


for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(square) {
    const color = getRandomColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.backgroundColor = '#1d1d1d'
    square.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[getRandomInt(0, colors.length + 1)]
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  