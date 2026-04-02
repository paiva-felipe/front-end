//Interação (Clique)
const botao = document.querySelector("#btn-curtir")
const contador = document.querySelector("#contador")

let curtidas = 0

botao.addEventListener("click", () => {
    curtidas++
    contador.textContent = curtidas
})

//Monitoramento (Input)
const campo = document.querySelector("#campo-texto")
const preview = document.querySelector("#preview-texto")

campo.addEventListener("input", () => {
    preview.textContent = "Digitando: " + campo.value
})

//Sensores (Mouse
const caixaCor = document.querySelector("#caixa-cor")
caixaCor.addEventListener("mouseenter", () => {
    caixaCor.style.backgroundColor = "blue"
})

caixaCor.addEventListener("mouseleave", () => {
    caixaCor.style.backgroundColor = ""
})

//Desafio Extra (Reset)
const botaoReset = document.querySelector("#btn-reset")
botaoReset.addEventListener("click", () => {

        curtidas = 0
        contador.textContent = curtidas

        campo.value = ""
        preview.textContent = "Digitando: ..."
    }
)

