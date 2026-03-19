//cauculo de preço
const inputQtd = document.querySelector("#qtd-lasanha")
const precoTexto = document.querySelector("#preco-lasanha")

if(inputQtd && precoTexto){
    inputQtd.addEventListener("input", () =>{
        const precoUnitario = 45.0
        const total= Number(inputQtd.value) * precoUnitario
        precoTexto.textContent = `R$  ${total.toFixed(2)}`
        precoTexto.style.color= total > 150? "#c0392b" : "#e67e22"
    })
}

// eventos de click para a CLASS - EVENT.TARGET
document.addEventListener('click', (event)=>{    //buscar na pagina toda 
    const clicado= event.target
}) 
const massas = document.querySelector('#secao-massas')
massas.addEventListener('click', (event)=> {
    const clicado= event.target
    if (clicado.classList.contains('bt_pedido')){
        console.log("voce clicou um botão de massas")
    }
})


// buscar evento direto na class
const botoesPedido= document.querySelectorAll('.bt_pedido')
botoesPedido.forEach((botao)=>{
    botao.addEventListener("click",(event)=>{
        botao.textContent = "✔️Pedido enviado"
        botao.style.backgroundColor = 'red'
        botao.style.cursor = "default"
        botao.disabled = true
    })
})