const nome = prompt("digite seu nome:")
const sobrenome = prompt("digite seu sobrenome")

let nomeFormatado = nome.trim().toLowerCase() + sobrenome.trim().toLowerCase() 
alert(`${nomeFormatado}`)

let numeroNome = nome.length()+ sobrenome.length()
alert(`${numeroNome}`)