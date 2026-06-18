document.addEventListener("DOMContentLoaded", function () {
  renderizarPedidos();
  configurarLimparPedidos()
  //continua
});

function renderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos");
  const spanTotal = document.querySelector("#valor-total");
  const spanResumo = document.querySelector("#valor-total-resumo");
  const spanContador = document.querySelector("#contador-itens");
  if (!lista) return;

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]"); //tem listas -->parse para pegar

  if (pedidos.length === 0) {
    lista.innerHTML = //inserir conteudo html
      "<li class='pedido-vazio'> nenhum pedido ainda. Acesse o" +
      "<a href='index8.html'> Cardapio </a> Para adicionar! </li>";
    if (spanTotal) spanTotal.textContent = "R$0,00";
    if (spanResumo) spanResumo.textContent = "R$0,00";
    if (spanContador) spanContador.textContent = "0 itens";
    return;
  }
  lista.innerHTML = "";
  let total = 0;

  pedidos.forEach(function (pedido, indice) {
    const li = document.createElement("li");
    li.classList.add("item-pedido");

    //informações - texto
    const textoSpan = document.createElement("span");
    // textoSpan.innerHTML= qtd + "x" + nome + "-" + preco
    textoSpan.innerHTML =
      "<strong>" +
      pedido.nome +
      "</strong>" +
      pedido.qtd +
      "x" +
      "R$" +
      pedido.preco.toFixed(2).replace(".", ",") +
      "= <span class='subtotal-item'> R$" +
      pedido.subtotal.toFixed(2).replace(".", ",") +
      "</span>";
    //criar botao remover prato --> visual
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "❌";
    btnRemover.classList.add("btn-remover");

    //removendo um item especifico
    btnRemover.addEventListener("click", () => {
      const lista = JSON.parse(
        localStorage.getItem("techfood_pedidos") || "[]",
      );
      lista.splice(indice);

      lista.splice(indice, 1);
      localStorage.setItem("techfood_pedidos", JSON.stringify(lista));
      renderizarPedidos();
    }); ///fim btn pedidos
    li.appendChild(textoSpan); //texto
    li.appendChild(btnRemover); //botão
    lista.appendChild(li);
    total += pedido.subtotal;
  }); ///fim pedidos for each
  //mais um trecho

  const totalFmt = "R$" + total.toFixed(2).replace(".", ",");
  if (spanTotal) spanTotal.textContent = totalFmt;
  if (spanResumo) spanResumo.textContent = totalFmt;
  const totalItns = pedidos.reduce(function (acc, p) {
    return acc + p.qtd;
  }, 0);
  if (spanContador) {
    spanContador.textContent = totalItns + (totalItns === 1 ? "item" : "itens");
  }
}

function configurarLimparPedidos() {
  //-->btn-limpar-pedidos
  const btn = document.querySelector("#btn-limpar-pedidos");
  if (!btn) return;
  btn.addEventListener("click", function () {
    localStorage.removeItem("techfood_pedidos");
    renderizarPedidos();
  });
}
