// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 2. INTERATIVIDADE NOS CARDS (Feedback visual)


// 3. DELEGAÇÃO DE EVENTOS
const main = document.querySelector("main")  //adiciona ouvinte principal tag
main.addEventListener("click", (event) =>{
    const clicado= event.target  //quem clicou?
    if(clicado.classList.contains("btn-menos")){
        const box = clicado.parentElement  //seleciona box clicada 
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent)
        spanQtd.textContent= Math.max(1, valorAtual -1)
        atualizarPrecoCard(box)
        return
    }
    if(clicado.classList.contains("btn-mais")){
        const box = clicado.parentElement  //seleciona box clicada 
        const spanQtd = box.querySelector(".qtd-valor")
        spanQtd.textContent= Number(spanQtd.textContent) + 1
        atualizarPrecoCard(box)
        return
    }
    // 3.2. AÇÂO DO btn-pedido
if(clicado.classList.contains("btn-pedido")){
    event.preventDefault()
    const card = clicado.parentElement
    const nomePrato = card.querySelector("h3").textContent
    const quantidade = card.querySelector(".qtd-valor").textContent
    const precoExibido = card.querySelector(".preco").textContent
    //efeito visualquando clicado "pedir agora"
    clicado.textContent= "✔️ Adicionado"
    clicado.style.backgroundColor = "#4db23b"
    clicado.disable= true
    setTimeout(()=>{
        clicado.textContent= "Pedir Agora"
        clicado.style.backgroundColor= ""
        clicado.disable= false
    }, 1500)
    if (!card.querySelector(".badge-adicionado")){
        card.insertAdjacentHTML(
            "beforeend", "<span class='badge-adicionado'> no resumo </span>"
        )
    }
    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)
}
})

// 4. AS FUNÇÔES ATUALIZAR PREÇO E INSERIR PRODUTO NO RESUMO

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent="R$" + total.toFixed(2).replace(".", ",")
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"
}

// fazer o bloquinho de resumo aparecer(adicionar) e sumir(remover)
function adicionarItemAoResumo(nome, qtd, preco, cardOrigem){
    const secaoResumo = document.querySelector("#secao-resumo")
    const listaResumo = document.querySelector("#lista-resumo")
    if (!secaoResumo || !listaResumo) return
    secaoResumo.style.display = "block"

    // criar um item na lista
    const itemLista = document.createElement("li")
    itemLista.classList.add("item-resumo")
    //informações - texto
    const textoSpan = document.createElement("Span")
    textoSpan.textContent= qtd + "x" + nome + "-" + preco
    //criar botao remover prato
    const btnRemover = document.createElement("button")
    btnRemover.textContent= "❌"
    btnRemover.classList.add("btn-remover")
    //removendo um item especifico
    btnRemover.addEventListener("click", ()=>{
        itemLista.remove()
        const badge = cardOrigem.querySelector(".badge-adicionado")
        if(badge) badge.remove()
        if(listaResumo.children.length === 0){
            secaoResumo.style.display= "none"
        } //acabou o evento de clique
    })
    // inserindo item ja criado visualmente
    itemLista.appendChild(textoSpan)
    itemLista.appendChild(btnRemover)
    listaResumo.appendChild(itemLista)
} //fim da funçao adicionarItemAoResumo

//excluindo todos
const btnLimpar = document.querySelector("#btn-limpar") //criando botao de limpar

if(btnLimpar){ //ele existe? se sim
    btnLimpar.addEventListener("click", ()=>{ //se sim adicione um evento de clique
        const listaResumo= document.querySelector("#lista-resumo")
        const secaoResumo= document.querySelector("#secao-resumo")
    // remove os badges criados no JS
    document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove()) 
    
    //remover os filhos dessa lista
    while(listaResumo.firstElementChild){
        listaResumo.firstElementChild.remove()
    }
    //sumir direto, mas fica salvo, nao recomendado
    secaoResumo.style.display = "none" 
    })
}