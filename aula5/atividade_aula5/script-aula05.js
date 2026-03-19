//mudar nome
const nome= document.querySelector('#nome-usuario')
nome.textContent= 'Felipe Gabriel Gonçalves Paiva'


//mudar foto
const foto = document.querySelector('#foto-perfil')
foto.src = './scr/images/perfil.png'

//mudar cor de fundo
const fundo = document.querySelector('#container-perfil')
fundo.style.backgroundColor= '#82c0df'

//adicionar classe status
const statusReal = document.querySelector('#badge-status')
statusReal.classList.add('.online')
statusReal.innerHTML ="Status: online"

//contar skills
const qtdSkills= document.querySelector('.skill')
console.log+(`A quantidade de skils do usuario é ${qtdSkills.lenght}`)






