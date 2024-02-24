// Seleciona e retorna elementos do Dom:
//     getElementById
//     pegaElementosPeloId
// ex.:

// const animaisSection = document.getElementById('animais');
// console.log(animaisSection)

// const contatoSection = document.getElementById('contato');
// console.log(contatoSection)

// const naoExiste = document.getElementById('teste');
// console.log(naoExiste)



// ***************

// querySelector:
// querySelector é um Seleltor Geral Único
//      retorna o primeiro elemento que combinar com o seu seletor CSS

const animais = document.getElementById('animais')
console.log(animais.innerText.toUpperCase())

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection)
console.log(gridSection.length)


const contato = document.getElementsByClassName('grid-section contato')
console.log(contato)

const ul = document.getElementsByTagName('li')
console.log(ul)
console.log(gridSection[2])

const animaiss = document.querySelector('.animais');
console.log(animaiss)

const lastChild = document.querySelector('.animais-lista li:last-child');
console.log(lastChild)

const linkCss = document.querySelector('[href^="https://"]');
console.log(linkCss)
// esse seletor especial é para selecionar todo href do meu documento: '[href^="https://"]      e coloca o valor que comece com com o que vc quer consultar/procurar, aqui no caso é o "https://", mas poderia ser outra com como uma "#" ou outra coisa.  Isso é um seletor css.

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);


const primeiroUl = document.querySelector('ul');
/*
//primeiroUl.classList.add('grid-section');
       //console.log(primeiroUl); esseaqui add/adiciona uma nova classe ao site, até deu uma "quebrada"(o menu de navegação ficou maior) no site, mas continou funcionando. 
*/
const navItem = primeiroUl.querySelector('li');  // Busca dentro do UL apenas.
console.log(navItem);

//P) Como selecionar todos os links internos?
//R)
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno)


//   *********
//   querySelectorAll:
//   querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList.

const gridSectionn = document.querySelectorAll('.gridSection')
console.log(gridSection[2])

const listas = document.querySelectorAll('ul');
console.log(listas.length) // tem 3 listas
console.log(listas[1])

const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais[0])
// quando tem (parenteses) é método, se chama método, leia quando tiver parenteses() metodo


const gridSectionHTML = document.getElementsByClassName('grid-section');
console.log(gridSectionHTML)


/*  MUDAR O NOME DA CONST p/ USAR O EXEMPLO:
const primeiroUl = document.querySelector('ul');
/*
//primeiroUl.classList.add('grid-section');
       //console.log(primeiroUl); esseaqui add/adiciona uma nova classe ao site, até deu uma "quebrada"(o menu de navegação ficou maior) no site, mas continou funcionando. 
*/


// ***   ***   for Each()
const gridSectionNode = document.querySelectorAll('.grid-section');
gridSectionNode.forEach(function (item, index) {
    console.log(index)
});


const gridSectionNodee = document.querySelectorAll('.grid-section');
gridSectionNodee.forEach(function (item, index) {
    console.log(item, index)
});


const gridSectionNodeee = document.querySelectorAll('.grid-section');
gridSectionNodeee.forEach(function (item, index) {
    console.log(item)
});

//  ***   ***   TRANSFORMANDO ARRAY-LIKE EM ARRAY:


const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid)

// arrayGrid.pop()
// console.log(arrayGrid)
// console.log(arrayGrid.length)



// ---->>>>   *******************
// Exercícios:
// 1/5: Retorne no console todas as imagens do site

// 2/5: Retorne no console apenas as imagens que começaram com a palavra imagem

// 3/5: Selecione todos os links internos (onde o href começa com #)

// 4/5: Selecione o primeiro h2 dentro de .animais-descricao

// 5/5: Selecione o último p do site.



// 1/5: Retorne no console todas as imagens do site
const todaImg = document.querySelectorAll('img');
// console.log(todaImg);

// 2/5: Retorne no console apenas as imagens que começaram com a palavra imagem
//const returnImg = document.querySelectorAll('[href="imagem"]'); //img
// console.log(returnImg);

// const returnImg = document.getElementsByName('.img imagem');

// const returnImg = document.getElementsByClassName('.img imagem')

// returnImg.forEach(function (imagem)){
//     returnImg = document.getElementsByClassName('.img imagem')
// };
// console.log(imagem);


// 3/5: Selecione todos os links internos (onde o href começa com #)

const linkInternoTodosMasSoRetornaUm = document.querySelector('[href^="#"]');
console.log(linkInternoTodosMasSoRetornaUm);
//retornou -->   <a href="#animais">ANIMAIS</a>

// 4/5: Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('h2:first-child');
console.log(primeiroh2);
/*retornou no console: 
<h2>
    ::before
    "RAPOSA"
</h2> 
*/


// 5/5: Selecione o último p do site.
const lastChildl = document.querySelector('p:last-child');
console.log(lastChildl)
/*retornou no console:
<p>
"Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos."
</p> */
