class Prato{
    constructor(nome, preco){
        this.nome= nome
        this.preco= preco
    }
    exibirComoMoeda(total){
        return "R$" + total.toFixed(2)
    }
}
const lasanha = new Prato("Lasanha bolonhesa", 45.00)

alert("Seja bem vindo ao restaurante Sabor e Saber!")
console.log("teste")

const cliente = prompt("bem vindo cliente. Para um atendimento personalizado, digite seu nome:")

let nomeFormatado = cliente.trim().toUpperCase()
alert("Bem vindo:"+ nomeFormatado)
alert(`Bem vindo ${nomeFormatado}`)

const horaAgora= new Date()

const hora= horaAgora.getHours()
if(hora < 11){
    alert(`Bom dia ${nomeFormatado}, aproveita o café da manhã`)
    console.log("antes das 11")
}
else{
    alert(`Boa tarde ${nomeFormatado}, aproveite o almoço`)
    console.log("depois das 11")
}

const querPrato= confirm(`Ola cliente ${nomeFormatado}, quer um prato?`)
if(querPrato){
    let quantidade= prompt(`hoje temos lasanha a bolonhesa, quantas você quer?`)
    let total= lasanha.preco * quantidade
    //alert(total)
    alert(`O total de ${lasanha.nome} é de: ${lasanha.exibirComoMoeda(total)}`)
} else{
    alert(`Ok, obrigado pela visita, volte sempre!`)
}