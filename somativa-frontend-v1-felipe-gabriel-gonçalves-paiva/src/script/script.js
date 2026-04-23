const tempoAgora= new Date
const hora = tempoAgora.getHours()

const mensagemTopo= document.querySelector('#mensagem-topo')

if (hora < 12){
    mensagemTopo.textContent ="Bom dia, Mestre Jedi!"
}
if (hora > 12 && hora < 18){
    mensagemTopo.textContent = "Boa tarde, Mestre Jedi!"
}
if (hora < 18){
    mensagemTopo.textContent= "Boa noite, Mestre Jedi!"
}

//Missão 2: O Banner Mágico (Eventos de Mouse)
const banerPromo = document.querySelector('#banner-promo')
banerPromo.addEventListener('mouseover', ()=>{ 
    banerPromo.classList.add('destaque-dark')
})
banerPromo.addEventListener('mouseout', ()=>{
    banerPromo.classList.remove('destaque-dark')
})

//Missão 3: Simulador de Desconto (Input em Tempo Real)
const quantidade = document.querySelector("#qtd-item")
const preco = document.querySelector("#resultado-preco")

quantidade.addEventListener('input', ()=>{
    const valorNumerico = Number(quantidade.value) * 85
    preco.textContent = valorNumerico
})

//Missão 4: O Carrinho de Compras (Click e innerHTML)

const adicionar = document.querySelector("#btn-adicionar")
const nomeProduto = document.querySelector("#nome-produto")
const listaCarrinho = document.querySelector("#lista-carrinho")


adicionar.addEventListener('click', ()=>{
    const produto = nomeProduto.value()
    listaCarrinho.innerHTML += `🎮 Item: ${produto}`
})

