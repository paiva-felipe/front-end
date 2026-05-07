//1. Selecione a seção .lista-noticias e exiba no console quantos cards ela possui (use.children.length).
const lista = document.querySelector('.lista-noticias')
const filhos = secao.children
console.log(filhos.length)

//2. A partir da seção, acesse o primeiro card e adicione a classe noticia-destaque.
const primeiroCard = lista.firstElementChild
primeiroCard.classList.add('noticia-destaque')

//3. A partir do primeiro card, acesse o próximo irmão e altere o título (h2) para "Notícia em Alta".
const irmao = primeiroCard.nextElementSibling
irmao.textContent= "Notícia em Alta"

//parte 2
//1. Crie um novo <article> com a classe card.
const card = document.createElement('article')
card.classList.add('card')

//2. Defina o innerHTML do card com um <h2> (título), um <p> (descrição) e um <button class="btn-leitura">Leia Mais</button>.
card.innerHTML = `
<h2>Titulo</h2>
<p>descrição</p>
<button class="btn-leitura">Leia Mais</button>`

//3. Insira o novo card como primeiro elemento da .lista-noticias (use prepend).
.append(card)

//parte 3
// 1. Remover: Adicione um evento de click ao botão de cada card. Ao clicar, o card inteiro deve ser removido da página. Use event.target.parentElement para acessar o card a partir do botão e .remove() para deletá-lo.
