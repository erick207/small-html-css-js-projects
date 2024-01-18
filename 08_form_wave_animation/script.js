const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    console.log(label.innerText)
    label.innerHTML = label.textContent
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})