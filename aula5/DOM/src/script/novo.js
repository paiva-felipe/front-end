const tituloNhoque= document.querySelector('#card-nhoque h3')
const botoesCompra= document.querySelectorAll(".btn-pedido")
const terceiroCard= document.querySelector('.card:nth-child(3)')

//manipulando atributos
const imagem_lasanha= document.querySelector('#foto-destaque')
const card_lasanha =document.querySelector('#card-lasanha')

console.log("1, Mostrando o titulo NHOQUE (pelo ID)", tituloNhoque)
console.log("2, Quantidade de botoes de pedido:", botoesCompra.length)
console.log("3, Quantidade de b")

const data= new Date()
const hora= data.getHours()

const saudacao= document.querySelector('#boas-vindas')
const seuNome= document.querySelector('#nome')

saudacao.textContent= hora < 18 ? "BEM VINDO, BOA TARDE!":"BEM VINDO, BOA NOITE!"
seuNome.innerHTML="meu nome é Celso"


// imagem_lasanha.alt= 'Produto esgotado'
// imagem_lasanha.src= './src/img/esgotado.jpg'

tituloNhoque.style.color="#e67e22"

card_lasanha.classList.add('em-promocao')