const nome = prompt("digite seu nome:")
const sobrenome = prompt("digite seu sobrenome")

let nomeFormatado = nome.trim().toLowerCase() + sobrenome.trim().toLowerCase() 
alert(`${nomeFormatado}`)

alert(`${nomeFormatado.length}`)

///////////// exc 2

const valorTotal= prompt("Qual é o valor total da conta?")
const quantidadePessoas = prompt("Qual a quantidade de pessoas?")
const pagar = valorTotal/ quantidadePessoas
alert(`cada um deve pagar: ${pagar.toFixed(2)}`)

/////// exc 3
const ValorCoempra = prompt("Qual o valor da compra")
const cupom = prompt("Você tem cupom?")
if(cupom = "sim"){
    alert
}