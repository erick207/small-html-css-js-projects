const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const toast = document.createElement('div')
    toast.classList.add('toast')

    toast.innerText = getMessage()
    
    addToast(toast)
}

function getMessage() {
    msg = messages[getRandomInt(0, messages.length -1)]
    return msg
}

function addToast(toast) {
    toasts.appendChild(toast)
    setTimeout(() => toasts.removeChild(toast), 3000)
}

// The maximum is exclusive and the minimum is inclusive
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}