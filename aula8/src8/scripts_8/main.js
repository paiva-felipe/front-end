document.addEventListener("DOMContentLoaded", function(){
  inicializarHoverCards()
  inicializarVitrine()
})

function inicializarHoverCards(){
  const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});
}

function inicializarVitrine(){
  const main = document.querySelector("main")  //adiciona ouvinte principal tag
  if(!main)return ///// verificador que evita o NULL

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
    const quantidade = Number(card.querySelector(".qtd-valor").textContent)
    const preco= parseFloat(card.querySelector(".preco").getAttribute("data-preco"))
    //efeito visualquando clicado "pedir agora"
    clicado.textContent= "✔️ Adicionado"
    clicado.style.backgroundColor = "#4db23b"
    clicado.disable= true
    setTimeout(()=>{
        clicado.textContent= "Pedir Agora"
        clicado.style.backgroundColor= ""
        clicado.disable= false
    }, 1500)
    
    ///badge é o "adicionado ao carrinho"
    const badgeExistente= card.querySelector(".badge-adicionado")                                     ///adiciona
    if(badgeExistente)badgeExistente.remove()
        card.insertAdjacentHTML("beforeend", "<span class='badge-adicionado'> no resumo </span>")
      setTimeout(function(){                                                                          ///epera 2 segundos
        const badge =card.querySelector(".badge-adicionado")
        if(badge) badge.remove()
      }, 2000)                                                                                        ///some

      /// RESETAR a quantidade de itens
      const box = card.querySelector(".quantidade-box")
      if(box){
        box.querySelector(".qtd-valor").textContent = "1"
        atualizarPrecoCard(box)
      }



    ///acionar ação de salvar pedido
    salvaraPedido({nome: nomePrato, preco: preco, qtd: quantidade})  //--> padrão "{chave","valor}"
    atualizarContadorPedidos()
  }
})
}

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent="R$" + total.toFixed(2).replace(".", ",")
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"
}

function salvarPedido(pedido){
  const lista= JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")  ///leu
  pedido.subtotal = pedido.preco * pedido.qtd
  lista.push(pedido)                                                         ///modificou
  localStorage.setItem("techfood_pedidos", JSON.stringify(lista))           ///salvou
}

function atualizarContadorPedidos(){
  ///continua...
}

