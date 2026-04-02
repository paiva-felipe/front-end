const numero = document.querySelector('#numero')
const resultado = document.querySelector('#resultado')

numero.addEventListener('input', () => {
    let num = Number(numero.value)

    resultado.textContent = num

    if (num > 10) {
        resultado.style.color = "red"
    } else {
        resultado.style.color = "green"
    }
})