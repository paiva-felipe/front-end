let nome= prompt("Nome: ").trim()
let sobrenome= prompt("Sobrenome: ").trim()

let completo= nome + " " + sobrenome
let(nome)

//nome completo em minusculo
alert(completo.toLocaleUpperCase())

//nome completo em maiusculo
alert(completo.toUpperCase())

// quantidade de caracteres
alert(completo.length)

/// com concat
let nomeCompleto= nome.concat(" ", sobrenome)
alert(nomeCompleto)

////ex2
let total= prompt("digite o total da compra:")
let qtdPessoas= prompt("digite a quantidade de pessoas:")

let totalPessoa= total/qtdPessoas
alert("cada um deve pagar: R$"+totalPessoa.toFixed(2))

////ex3
let valorCompra= prompt("digite o valor da compra:")
let cupom= prompt("Tem cupom? Digite SIM ou NÃO").toLowerCase().trim()
if (valorCompra > 150 || cupom == "sim"){
    console.log("frete grátis")
}else{
    console.log("frete necessita ser pago")
}
//ou
let cupom2= confirm("se possui cupom clique ok")
let resposta= valorCompra > 150|| cupom == true 
? "tem frete pago" 
: "não tem frete pago"

console.log(resposta)

////ex4
let userNum= Number(promp("digite um valor de 1 a 10:"))
let numSorteado= Math.floor(Math.random()*10)+1
if (userNum === numSorteado){
    alert("parabens voce ganhou")
} else{
    alert("não foi dessa vez"+ numSorteado)
}
//ou operador tenario
let premio= userNum === numSorteado
?"parabens"
:"que pena"

////5
class Veiculo{
    constructor(mo, ma, an){
        this.mdelo= mo
        this.marca= ma
        this.ano= an
        }
        idadeVeiculo(anoAtual){
            return anoAtual - this.ano
        }
}
const meuCarro= new Veiculo("Corolla", "Toyota", 2010)
let anoAtual= prompt("digite em que ano estamos")

alert("0"+ meuCarro.modelo+ "tem"+ meuCarro.idadeVeiculo(anoAtual+anos))